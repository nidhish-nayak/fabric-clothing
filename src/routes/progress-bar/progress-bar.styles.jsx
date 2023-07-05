import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  z-index: 9;
  overflow-y: hidden;
  display: flex;
  align-items: flex-end;
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  position: fixed;
  background-color: #ececec;
  height: 100%;
  width: 100%;
  // animation: slideUp 3.25s cubic-bezier(0.42, 0, 0.58, 1) 3.25s forwards;

  // @keyframes slideUp {
  //   0% {
  //     height: 100%;
  //   }
  //   100% {
  //     height: 0%;
  //   }
  // }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 420px) {
    font-size: 3rem;
  }
`

export const Loader = styled.div`
  z-index: 10;
  height: 200px;
  width: 0;
  background-color: black;
  position: relative;
  animation: expandWidth 3.25s cubic-bezier(0.42, 0, 0.58, 1) forwards;

  &::after {
    content: attr(data-text);
    color: #ececec;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-75%, -50%);
  }

  @keyframes expandWidth {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }

  }

`;
