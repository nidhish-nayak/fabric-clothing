import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled(Link)`
    font-size: 28px;
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
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;
