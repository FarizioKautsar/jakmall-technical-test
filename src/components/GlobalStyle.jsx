import { createGlobalStyle } from "styled-components";
import jmColors from "./jmColors";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background-color: #FFFAE6;
  }

  h1 {
    margin-top: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${jmColors.orange};
    position: relative;
    display:inline-block; 
    z-index: 0;
    font-size: 36px;
    &:after {
      position: absolute;
      content: '';
      background-color: ${jmColors.lightWhite1};
      height: 8px;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 4px;
      margin: 0 auto;
      z-index: -1;
    }
  }

  h2, h3, h4, h5, h6 {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: ${jmColors.orange};
  }

  h2 {
    margin-top: 0;
    font-size: 24px;
  }
`

export default GlobalStyle;