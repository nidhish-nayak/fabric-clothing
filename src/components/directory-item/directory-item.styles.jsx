import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    opacity: 1;
    position: absolute;

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        color: white;
        text-transform: uppercase;
        margin: 0;
        padding: 1em;
    }

    &:hover {
        opacity: 1;
    }

    @media (max-width: 480px) {
      p {
        font-size: 0.80rem;
      }
    }
`;

export const PrimaryContainer = styled.div`
    height: 400px;
    padding: 0.5px;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 1024px) {
      height: 300px;
    }

    @media (max-width: 768px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }

    ${BackgroundImage} {
      filter: brightness(50%);
    }

    &:hover {
        cursor: pointer;
        ${BackgroundImage} {
            transform: scale(1.1);
            filter: brightness(100%);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${TitleContainer} {
            opacity: 1;
            display: none;
        }
    }
`;

export const SecondaryContainer = styled.div`
    width: 100%;
    margin: 0.5px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
      height: 300px;
    }
    
    @media (max-width: 768px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }
   
    ${BackgroundImage} {
      filter: brightness(50%);
      background-position: center;
    }
    
    &:hover {
        cursor: pointer;
        ${BackgroundImage} {
            transform: scale(1.1);
            filter: brightness(100%);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${TitleContainer} {
            opacity: 1;
            display: none;
        }
    }
`;