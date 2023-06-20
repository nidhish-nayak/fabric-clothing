import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    margin: 1em;

    h2 {
        margin: 10px 0;
    }

    @media (max-width: 1024px) {
        margin-bottom: 4em;
        width: 320px;
    }

    @media (max-width: 400px) {
        width: 200px;
    }
`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;

        button {
            margin: 1em 0;
        }
    }

    @media (max-width: 400px) {
        button {
            width: 200px;
        }
    } 
`;
