import styled from "styled-components";

export const DirectoryContainer = styled.div`
  padding: 0 40px;
  margin: 0;

  @media (max-width: 480px) {
    padding: 0;
  }
`

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 1024px) {
    height: 100%;
  }

  @media (max-width: 480px) {
    padding: 0 40px;
  }
`

export const SectionTitleContainer = styled.div`
  width: 70%;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const SectionTitle = styled.h1`
  font-family: "Bebas New", sans-serif;
  font-weight: bold;
  font-size: 6rem;
  margin-left: -6px;
  margin-bottom: 40px;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 4rem;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const SectionDesc = styled.h3`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 40px;
  width: 75%;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`

export const SectionItem = styled.img`
  margin-top: 40px;
  width: 30%;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2em;
`

export const HeroButtonOne = styled.button`
  padding: 1em;
  margin-right: 1em;
  font-family: "Montserrat", sans-serif;
  color: white;
  background: black;
`
export const HeroButtonTwo = styled.button`
  padding: 1em;
  margin-right: 1em;
  font-family: "Montserrat", sans-serif;
  color: black;
  background: white;
`

export const GridContainer = styled.section`
    margin: 10em 0 0 0;
    padding: 0em;

    h2 {
      margin-bottom: 2em;
      text-align: center;
      font-size: 2rem;
      font-family: "Montserrat", sans-serif;
    }

    @media (max-width: 1980px) {
      padding: 0 15em;
    }

    @media (max-width: 1366px) {
      padding: 0 10em;
    }

    @media (max-width: 1024px) {
      padding: 0em;
    }

    @media (max-width: 768px) {
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
