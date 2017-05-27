import React from 'react';
import { render } from 'react-dom';
import App from './component';

require('./styles.css');
require('./styles.scss');

render(
  <App />,
  document.getElementById('root')
);
