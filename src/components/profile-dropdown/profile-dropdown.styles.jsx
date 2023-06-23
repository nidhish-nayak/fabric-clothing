import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "../button/button.styles";

export const ProfileDropDownContainer = styled.div`
    position: absolute;
    max-width: 280px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
    }
`

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 5em;
        border-radius: 50%;
        border: 1px solid black;
    }
`

export const ProfileName = styled.h3`
    margin-top: 1em;
    margin-bottom: 0em;
`

export const ProfileEmail = styled.p`
    margin-top: 1em;
    margin-bottom: 1em;
`

export const SignOutLink = styled(Link)`
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left:0;

    &:hover {
        background-color: #efefef;
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
    }
`;
