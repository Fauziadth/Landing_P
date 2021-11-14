import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Component/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
