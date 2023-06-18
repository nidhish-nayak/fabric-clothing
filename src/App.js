import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import { getCurrentUser } from "./utils/firebase/firebase.utils.js";

const App = () => {
  useEffect(() => {
    // Basically unsubscribe stores user state = {null or userID} and returns it to
    getCurrentUser().then((user) => console.log(user));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
