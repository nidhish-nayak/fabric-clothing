import styled from "styled-components";

export const DirectoryContainer = styled.div``;

export const DirectoryPrimary = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const DirectorySecondary = styled.div`
    width: 100%;
    display: flex;
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const SecondaryTitle = styled.h2`
    font-family: "synonym", sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin: 4em auto 1em;
`;
