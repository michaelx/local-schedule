import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);


// Change unregister() to register() to generate a Progressive Web App.
// Pitfalls: https://create-react-app.dev/docs/making-a-progressive-web-app
serviceWorker.unregister();
