import { lazy, Suspense } from "react";
import GridSection from "../grid-section/grid-section.component";
import HeroSection from "../hero-section/hero-section.component";
import Shipping from "../shipping/shipping.component";
import Testimonials from "../testimonials/testimonials.component";

import Spinner from "../spinner/spinner.component";
import { DirectoryContainer } from "./directory.styles";

const LazyTrending = lazy(() => import("../trending/trending.component"));

const Directory = () => {
	return (
		<DirectoryContainer>
			<HeroSection />
			<GridSection />
			<Testimonials />
			<Suspense fallback={<Spinner />}>
				<LazyTrending />
			</Suspense>
			<Shipping />
		</DirectoryContainer>
	);
};

export default Directory;
