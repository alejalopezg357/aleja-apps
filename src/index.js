import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';

import Moon from './components/Moon/Moon';
import Introduction from './components/Introduction/Introduction'

ReactDOM.render(
  <React.StrictMode>
    <div className="box">
      <Moon />
      <Introduction />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
