import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  margin: auto 0;
  display: inline-block;
  white-space: nowrap;
  background-color: white;

  &:hover {
    cursor: pointer;
  }

`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`

export const TitleOne = styled.span`
  padding: 0.10em 0.25em 0.08em 0.25em;
  background-color: black;
  color: white;
`

export const TitleTwo = styled.span`
  padding: 0.10em 0.25em 0.08em 0.25em;
`