import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const HeroContainer = styled.div`
    display: flex;
    padding: 4em;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 2em;
    }
`;

export const HeroTitle = styled.p`
    font-weight: 900;
    font-size: 3rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const HeroSlider = styled.div`

`

export const SliderImage = styled.div`
    width: 100%;
    background-image:${({ imageUrl }) => `url(${imageUrl})`};
    height: 100%;
`

export const HeroImage = styled.img`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
