import styled from "styled-components";
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
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
`;

export const CartItemContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin: 0 0 0.75em 0;
`;
export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;
