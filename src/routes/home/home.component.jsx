import Directory from '../../components/directory/directory.component';
import Data from '../../Data.json';

const Home = () => {
    return (<Directory categories={Data} />);
}

export default Home;
