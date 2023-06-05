import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled(Link)`
    font-size: 28px;
    margin-left: 10px;
    margin-bottom: 25px;
    padding: 0.25em;
    border-radius: 0.1em;
    cursor: pointer;
    &:hover {
        background-color: lightgrey;
    }
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    column-gap: 20px;

    @media (max-width: 400px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
        column-gap: 20px;
    }

    @media (max-width: 300px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        column-gap: 20px;
    }
`;
