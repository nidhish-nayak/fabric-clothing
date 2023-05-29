import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;
