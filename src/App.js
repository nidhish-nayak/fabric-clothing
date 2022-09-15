import './App.css';
import CategoryItem from './components/category-item/category-item.component';
import data from './categoryData.json';

const App = () => {

  const categories = data;

  return (
    <div className='categories-container'>
      {
        categories.map(i => (
          <CategoryItem title={i.title} imageUrl={i.imageUrl} key={i.id} />
        ))
      }
    </div>
  );
}

export default App;
