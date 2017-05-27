import React from 'react';
import { render } from 'react-dom';
import App from './component';

require('../style/styles.css');
require('../style/styles.scss');

render(
  <App />,
  document.getElementById('root')
);
