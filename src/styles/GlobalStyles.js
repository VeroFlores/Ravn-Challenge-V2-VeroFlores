import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
                box-sizing: border-box;
                font-family: SF Pro Display;
                font-size:17px;
                font-style: normal;
        }
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
                padding:0px;
        }
        ul {
                list-style: none;
        }
        button {
                background: transparent;
                border: 0;
                outline: 0;
        }
        body {
                background: #fefefe;
                height: 100vh;
                margin: 0 auto;
                overscroll-behavior: none;
                width: 100%;
        }
`;
export default GlobalStyles;
