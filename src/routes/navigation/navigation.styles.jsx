import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 1px rgb(200, 200, 200) solid;

    @media (max-width: 768px) {
        padding: 0 10px;   
    }
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 65%;
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media (max-width: 768px) {
        width: 100%;   
        font-size: 0.85rem;
    }

    @media (max-width: 300px) {
        width: 110%;
        font-size: 0.75rem;
    }
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 10px 5px;
    }
`;
