import styled from "styled-components";

export const GridContainer = styled.section`
    margin: 10em 0 0 0;
    padding: 0em;

    h2 {
      margin-bottom: 2em;
      text-align: center;
      font-size: 2rem;
      color: #333;
      letter-spacing: -1.75px;
      font-family: "Montserrat", sans-serif;
    }

    @media (max-width: 1980px) {
      padding: 0;
    }

    @media (max-width: 1366px) {
      padding: 0;
    }

    @media (max-width: 1024px) {
      padding: 0em;
      margin: 6em 0 0 0;
      
      h2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      margin: 4em 0 0 0;

      h2 {
        text-align: center;
        font-size: 1rem;
      }
    }
`;

export const PrimaryGrid = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

export const SecondaryGrid = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

`;
