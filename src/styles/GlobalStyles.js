import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
      --accent: #ffcb39;
      --lightGray: #c5c5c5;
      --darkGray: #222222;
  }
  
  body {
    background: #000000;
    background-image: url('images/star-bg.png');
    color: var(--accent);
    font-family: 'Lato';

    h1 {
      font-family: 'Montserrat';
      font-size: 40px;
      text-align: center;
      text-transform: uppercase;
    }

    @media (max-width: 550px) {
      h1 {
        font-size: 34px;
      }
    }
  }
`;

export default GlobalStyles;
