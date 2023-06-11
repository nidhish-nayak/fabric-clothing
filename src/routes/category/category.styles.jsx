import styled from "styled-components";

export const CategorySection = styled.section`
    margin-top: 1em;
`;

export const CategoryContainer = styled.div`
    padding: 0 2em;
    display: grid;
    column-gap: 20px;
    row-gap: 50px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        column-gap: 20px;
    }

    @media (max-width: 400px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(170px,1fr));
        column-gap: 20px;
    }

    @media (max-width: 300px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px,1fr));
        column-gap: 20px;
    }
`;

export const CategoryTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 25px;
    text-decoration: underline dashed 2px #cecece;
    text-underline-offset: 0.35rem;
    text-align: center;
`;
