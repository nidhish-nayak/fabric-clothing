import Directory from '../../components/directory/directory.component';
import Data from '../../Data.json';

const Home = () => {
    console.log('App.js rendered');
    return (<Directory categories={Data} />);
}

export default Home;
