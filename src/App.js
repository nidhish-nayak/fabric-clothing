import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import { setCurrentUser } from './store/user/user.action.js';
import {
  createUserDocFromAuth,
  onAuthStateChangedListener
} from "./utils/firebase/firebase.utils.js";

const App = () => {
  const dispatch = useDispatch();

  // UserReducer - This is called when component is rendered & it listens to auth on user sign/out
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // If Auth state changed - new user doc is created in DB and the new user is updated
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  // This dispatch dependency is not needed and can be left blank. We have added it here just to avoid one warning message

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
