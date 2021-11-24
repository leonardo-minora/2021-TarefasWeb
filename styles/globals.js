import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   background-color: #ddd;
   padding: 0;
   margin: 0;
   font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
