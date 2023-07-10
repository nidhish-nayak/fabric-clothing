import styled from "styled-components";

export const DirectoryContainer = styled.div`
  padding: 0 40px;
  margin: 0;

  @media (max-width: 480px) {
    padding: 0;
  }
`

export const SectionContainer = styled.section`
  border-radius: 10px;
  line-height: 1;
`

export const Hero = styled.div`
  max-width: 130rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 3.2rem;
  margin: 0 auto;
  align-items: center;
  gap: 0 9.6rem;
`

export const HeroTextBox = styled.div`
  
`

export const HeroTitle = styled.h1`
  font-size: 5.2rem;
  font-family: "Bebas Neue", sans-serif;
  color: #333;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.05;
  margin-bottom: 3.6rem;
`

export const HeroDescription = styled.p`
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  letter-spacing: -1px;
  line-height: 1.5;
  margin-bottom: 4.8rem;
`

export const HeroButtonLeft = styled.button`
  border: none;
  font-family: "Open Sans Condensed";
  padding: 1em 2em;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background: #333;
  margin-right: 2em;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: #cecece;
    color: black;
  }
`

export const HeroButtonRight = styled.button`
  border: none;
  font-family: "Open Sans Condensed";
  padding: 1em 2em;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  background: #cecece;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: #333;
    color: white;
  }

  span {
    margin-left: 0.25em;
  }
`

export const HeroImageContainer = styled.div`
  margin-top: 2em;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`

export const HeroImage = styled.img`
  width: 100%;
`

export const DeliveredClothes = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
  gap: 3.2rem;
`

export const DeliveredImages = styled.div`
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: -0.5rem;
    outline: #fdf2e9 solid 3px;
  }
`

export const DeliveredText = styled.p`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  span {
    color: #cf711f;
  }
`

export const GridContainer = styled.section`
    margin: 10em 0 0 0;
    padding: 0em;

    h2 {
      margin-bottom: 2em;
      text-align: center;
      font-size: 2rem;
      letter-spacing: -1.75px;
      color: #333;  
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
