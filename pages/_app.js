import React from 'react';
import GlobalStyle from '../styles/globals';

function MyApp({Component, pageProps}) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
