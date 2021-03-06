import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


class HomePage extends React.Component {

  render(fname) {
          return <h1>Market Items</h1>;
        }
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
