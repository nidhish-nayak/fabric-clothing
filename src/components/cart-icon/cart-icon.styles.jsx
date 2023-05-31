import styled from "styled-components";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
    margin: 1em;
    min-height: 25px;
    min-width: 25px;
    position: relative;
    &:hover {
        cursor: pointer;
        font-weight: 900;
    }
`;
export const ShoppingIcon = styled(ShopIcon)`
    position: absolute;
    margin: 0.01em;
`;
export const ItemCount = styled.span`
    padding: 1px 0 0 0;
    font-size: 0.75rem;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
