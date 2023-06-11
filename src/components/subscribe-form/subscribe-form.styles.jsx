import styled from "styled-components";

export const Form = styled.form`
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const FormInputContainer = styled.div`
    position: relative;
`;

export const FormInput = styled.input`
    border: none;
    padding: 0.75em 6.5em 0.75em 0.75em;
    width: 16em;
    border-radius: 6px;
`;

export const FormButton = styled.button`
    position: absolute;
    right: 0;
    cursor: pointer;
    margin: 0.35em;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    height: 2em;

    &:hover {
        background-color: rgb(30,30,30);
        color: white;
    }
`;