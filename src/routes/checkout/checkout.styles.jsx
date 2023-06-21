import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 65%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em auto 0;

    @media (max-width: 768px) {
        width: 90%;
        font-size: 0.9rem;
    }

    @media (max-width: 400px) {
        font-size: 0.7rem;
    }
`;
export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:nth-child(4) {
        margin-left: -10px
    }

    &:last-child {
        width: 8%;
    }

    @media (max-width: 400px) {
            
        &:nth-child(4) {
            margin-left: 0px;
        }

        &:last-child {
            width: 10%;
            margin-left: -2px;
        }
    }
`;
export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media (max-width: 400px) {
        font-size: 1.5rem;
    }
`;
