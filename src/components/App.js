import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Schedule from '../containers/Schedule';

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 64em;
    margin: 0 auto;
    padding-right: .5em;
    padding-left: .5em;

    /* stylelint-disable value-list-comma-space-after */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    /* stylelint-enable */

    font-size: 1em;
    line-height: 1.5;
    color: #0c0c10;
    background-color: rgb(246, 247, 248);
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Schedule />
  </React.Fragment>
);

export default App;
