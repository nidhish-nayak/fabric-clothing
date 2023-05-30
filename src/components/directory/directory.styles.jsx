import styled from "styled-components";

export const DirectoryContainer = styled.div`
    margin-bottom: 1em;
`;

export const PrimaryContainer = styled.div`
    width: 100%;
    display: flex;
    /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
`;

export const SecondaryContainer = styled.div`
    margin: 6em 0 0 0;
`;

export const SecondaryTitle = styled.h2`
    font-family: "synonym", sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2em 0;
`;

export const SecondaryBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    padding: 0 10em;

    @media (max-width: 1340px) {
        padding: 0 2em;
    }

    @media (max-width: 768px) {
        display: flex;
        flex: 1 1 auto;
        padding: 2em;
        margin: 1em auto;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin: 1em auto;
        justify-content: center;
        align-items: center;
    }
`;