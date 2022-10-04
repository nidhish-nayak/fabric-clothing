import Directory from '../../components/directory/directory.component';
import Data from '../../data/HOME_DATA.json';

const Home = () => {
    return (<Directory categories={Data} />);
}

export default Home;
