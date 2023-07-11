import GridSection from "../grid-section/grid-section.component";
import HeroSection from '../hero-section/hero-section.component';

import {
    DirectoryContainer
} from "./directory.styles";

const Directory = () => {
    return (
        <DirectoryContainer>
            <HeroSection />
            <GridSection />
        </DirectoryContainer>
    );
};

export default Directory;
