import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 1rem;
    align-items: center;
    // To avoid annoying selections on clicks
    user-select: none;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 400px) {
        font-size: 0.7rem;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 80%;
        height: 80%;
    }
`;

export const Name = styled.span`
    width: 23%;
`;

export const Quantity = styled.span`
    width: 23%;
    display: flex;
`;

export const Price = styled.span`
    width: 23%;

    @media (max-width: 400px) {
        margin-right: -20px;
    }
`;

export const Arrow = styled.div`
    cursor: pointer;
    background-color: #eeeeee;
    padding: 0 4px 0 4px;
    border-radius: 2px;

    &:hover {
        background-color: #2a2a2a;
        color: white;
    }

    @media (max-width: 400px) {
        padding: 0 2px 0 2px;
    }
`;

export const Value = styled.span`
    margin: 0 10px;

    @media (max-width: 400px) {
        margin: 0 5px;
    }
`;

export const RemoveButton = styled.div`
    margin-left: 12px;
    padding: 3px 6px;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    background-color: #eeeeee;

    &:hover {
        background-color: #2a2a2a;
        color: white;
    }
`;
