import GridSection from "../grid-section/grid-section.component";
import HeroSection from '../hero-section/hero-section.component';
import Testimonials from "../testimonials/testimonials.component";
import Trending from "../trending/trending.component";

import {
    DirectoryContainer
} from "./directory.styles";

const Directory = () => {
    return (
        <DirectoryContainer>
            <HeroSection />
            <GridSection />
            <Testimonials />
            <Trending />
        </DirectoryContainer>
    );
};

export default Directory;
