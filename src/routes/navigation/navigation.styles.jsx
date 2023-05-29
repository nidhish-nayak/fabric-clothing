import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/fabric.svg";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 1px rgb(200, 200, 200) solid;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
`;

export const Logo = styled(LogoSvg)`
    height: fit-content;
    width: 180px;
    padding: 25px 25px 25px 25px;
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
