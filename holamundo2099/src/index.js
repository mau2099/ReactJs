import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HolaMundo from './components/HolaMundo';
import Button from './components/Button';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Button text="click me!" text2= "prueba de text2" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
