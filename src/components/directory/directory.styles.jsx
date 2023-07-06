import styled from "styled-components";

export const DirectoryContainer = styled.div`
  padding: 0 40px;
  margin: 0;
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const TitleContainer = styled.div`
  width: 70%;
  margin-right: 40px;
`

export const SectionTitle = styled.h1`
  font-family: "Bebas New", sans-serif;
  font-weight: bold;
  font-size: 6rem;
  margin-left: -6px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`

export const SectionDesc = styled.h3`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 40px;
  width: 75%;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`

export const SectionItem = styled.img`
  width: 30%;
  height: 100%;
  margin-top: 4em;
  margin-left: 40px;
  border-radius: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2em;

  button {
    margin-right: 1em;
  }
`