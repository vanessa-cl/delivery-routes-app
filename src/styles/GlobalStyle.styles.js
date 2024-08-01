import { createGlobalStyle } from "styled-components";
// import { background } from "../../public/images/iStock-1215384892.jpg";

export default createGlobalStyle`
  :root {
    --red: #FF4500;
    --dark-red: #A82D00;
    --orange: #FF8C00;
    --dark-orange: #B26200;
    --yellow: #FFD700;
    --dark-gray: #333333;
    --gray: #3E3D3D;
    --black: #242424;
    --mid-gray: #666666;
    --light-gray: #DADADA;
    --white: #FFFFFF;
    --linear-gradient: linear-gradient(180deg, #FF4500 34%, #FF8C00 73%);
    --logo-font: 'Silkscreen', sans-serif;
    --main-font: 'Outfit', sans-serif;
    --red-border: 2px solid var(--red);
    --orange-border: 2px solid var(--orange);
    --green: #228B22;
    --green-border: 2px solid var(--green);
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
    height: 100dvh;
    background-color: var(--dark-gray);
  }

  #__next {
    display: flex;
    flex-direction: column;
    background-image: url("/images/iStock-1215384892.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

`;
