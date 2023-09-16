import { Fragment, lazy, Suspense } from "react";
import Footer from "../../components/footer/footer.component";
import Spinner from "../../components/spinner/spinner.component";

const LazyDirectory = lazy(() => {
	return import("../../components/directory/directory.component");
});

const Home = () => {
	return (
		<Fragment>
			<Suspense fallback={<Spinner />}>
				<LazyDirectory />
			</Suspense>
			<Footer />
		</Fragment>
	);
};

export default Home;
