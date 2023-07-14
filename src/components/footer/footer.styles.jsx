import styled from "styled-components";

export const FooterWrapper = styled.footer`
    margin: 6em 0 0 0;
    height: 100%;
    padding-bottom: 4em; 
    background-color: #ececec;
    border-top: 1px black solid;
    display: grid;
    font-family: sans-serif;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const LogoWrapper = styled.div`
    align-self: center;
    justify-self: center;

    @media (max-width: 768px) {
        margin-top: 2em;
    }
`

export const List = styled.ul`
    list-style: none;
    align-self: start;
    justify-self: start;
    margin-top: 2em;
    font-size: 0.9rem;
    line-height: 1.25rem;

    li:nth-child(1) {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0.5em;
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;

    p {
        text-align: center;
    }
`;

export const IconWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        padding-top: 0.25em;
    }
`;

export const Divider = styled.span`
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
        font-size: 0.9rem;
        line-height: 1.25rem;
        margin: 0 0 0.5em 0;
    }

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

export const SubscribeTitle = styled.h4`
    margin: 2em 0 1em 0;
`;
