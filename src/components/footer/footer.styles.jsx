import styled from "styled-components";

export const FooterWrapper = styled.footer`
    margin: 6em 0 0 0;
    height: 100%;
    padding-bottom: 4em; 
    background-color: #ececec;
    border-top: 1px black solid;
    font-family: "synonym", sans-serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        img {
            width: 50%;
            margin: 4em 0 2em 0;
        }
    }
`;

export const Logo = styled.img`
    width: 60%;
    border-radius: 1px;
    align-self:center;
    justify-self: center;
`
export const List = styled.ul`
    list-style: none;
    align-self: start;
    justify-self: start;
    margin-top: 2em;

    li:nth-child(1) {
        font-family: "Amulya", sans-serif;
        margin-bottom: 0.5em;
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

export const IconWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Divider = styled.span`
    font-family: 'synonym', sans-serif;
    margin: 0 1em;
`

export const SubscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 40px;
    margin-top: 2em;

    p {
        margin: 0 0 0.5em 0;
    }

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

export const SubscribeTitle = styled.h4`
    margin: 2em 0 1em 0;
`;
