import GridSection from "../grid-section/grid-section.component";
import HeroSection from "../hero-section/hero-section.component";
import Shipping from "../shipping/shipping.component";
import Testimonials from "../testimonials/testimonials.component";
import Trending from "../trending/trending.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
	return (
		<DirectoryContainer>
			<HeroSection />
			<GridSection />
			<Testimonials />
			<Trending />
			<Shipping />
		</DirectoryContainer>
	);
};

export default Directory;
