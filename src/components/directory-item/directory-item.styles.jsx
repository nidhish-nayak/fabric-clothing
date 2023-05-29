import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const PrimaryBodyContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    opacity: 0.7;
    position: absolute;

    h2 {
        font-weight: bold;
        margin: 6px 6px 0;
        font-size: 22px;
        color: #4a4a4a;
        text-transform: uppercase;
    }

    p {
        font-weight: lighter;
        font-size: 16px;
    }

    &:hover {
        opacity: 1;
    }
`;

export const SecondaryBodyContainer = styled.div`
    height: 50px;
    padding: 0 25px;
    top: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    opacity: 0.7;
    position: absolute;

    p {
        font-weight: lighter;
        font-size: 16px;
    }

    &:hover {
        opacity: 1;
    }
`;

export const PrimaryDirectoryContainer = styled.div`
    min-width: 30%;
    height: 600px;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            filter: brightness(90%);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${PrimaryBodyContainer} {
            opacity: 0.9;
        }
    }
`;

export const SecondaryDirectoryContainer = styled.div`
    margin: 3em 5em 6em 5em;
    width: 200px;
    height: 300px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    span {
        position: absolute;
        top: 1em;
        left: 1em;
        font-family: 'Amulya', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: black;
        z-index: 1;
        padding: 0.5em;
        background-color: white;
    }

    &:hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            filter: brightness(70%);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${SecondaryBodyContainer} {
            opacity: 1;
        }
    }
`;
