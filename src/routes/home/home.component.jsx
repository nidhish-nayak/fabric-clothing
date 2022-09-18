import Data from '../../Data.json';
import Directory from '../../components/directory/directory.component';

const Home = () => {
    console.log('App.js rendered');
    return (<Directory categories={Data} />);
}

export default Home;
