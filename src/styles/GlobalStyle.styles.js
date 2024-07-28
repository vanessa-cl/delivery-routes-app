import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --red: #FF4500;
    --orange: #FF8C00;
    --yellow: #FFD700;
    --dark-gray: #333333;
    --black: #242424;
    --mid-gray: #666666;
    --white: #FFFFFF;
    --linear-gradient: linear-gradient(180deg, #FF4500 34%, #FF8C00 73%);
    --logo-font: 'Silkscreen', sans-serif;
    --main-font: 'Outfit', sans-serif;
    --red-border: 2px solid var(--red);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__next {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body, #__next {
    font-family: var(--main-font);
    font-style: normal;
    height: 100%;
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
