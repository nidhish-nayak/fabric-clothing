import styled from "styled-components";

export const TrendingContainer = styled.section`
    margin: 6em 0 0 0;

    @media (max-width: 400px) {
        margin: 4em 0 0 0;
    }
`;

export const TrendingTitle = styled.h2`
    font-family: "synonym", sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`;

export const TrendingItems = styled.div`
    margin: 4em 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2em;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr; 
    }

    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr; 
    }
`;