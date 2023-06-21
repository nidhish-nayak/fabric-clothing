import styled from "styled-components";

export const AuthContainer = styled.div`
    margin: 1em 4em 1em;
    display: flex;
    justify-content: space-around;

    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 6em auto 1em;
    }
`;  
