import styled from "styled-components";

export const DirectoryContainer = styled.div`
`;

export const PrimaryContainer = styled.section`
    width: 100%;
    display: flex;
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        div:nth-of-type(3) {
            grid-column: 1/3;
        }
    }

    @media (max-width: 350px) {
        display: flex;
        flex-direction: column;
    }
`;

export const SecondaryContainer = styled.section`
    margin: 6em 0 0 0;
`;

export const SecondaryTitle = styled.h2`
    font-family: "synonym", sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2em 0;

    @media (max-width: 768px) {
        margin: 0 0 -2em 0;
    }

    @media (max-width: 400px) {
        margin: 0 0 0.5em 0;
    }
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
        padding: 0 2em;
        margin: 0em auto;
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