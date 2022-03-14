import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Rubik", sans-serif;;
    line-height: 1;
    font-weight: 400;
    overflow-x: hidden;
    transition: all 0.50s linear;
  }

  .buttonIcon {
    margin-right: 1rem;
  }

  .iconNoDisplay {
    display: none;
  }

  .iconDisplay {
    display: block;
  }

  .featureIcon {
    background-color:${({ theme }) => theme.primary};
    padding: 2rem;
    border-radius: 50%;
  }

  .navOpen {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(0);
  }

  .closeNavMenuIcon {
    color: ${({ theme }) => theme.text};
  }

  .openNavMenuIcon {
    color: ${({ theme }) => theme.headerText};
  }

  .heroImageBox {
    background-image: url(../img/blob.png);
    background-size: cover;
    background-position: center;
    background-color: black;
  }

  .socialIcon {
    height: 2.4rem;
    width: 2.4rem;
  }
  
  .quoteIcon {
    fill: #ddd;
    font-size: 6rem;
    color: #ddd;
    margin-bottom: 4.8rem;
  }

  @media (max-width: 75em) {
    html {
    /* 9px / 16px  */
      font-size: 56.25%;
    }
  }

  @media (max-width: 59em) {
    /* 8px / 16px */
    html {
      font-size: 50%;
    }
  }

`;
