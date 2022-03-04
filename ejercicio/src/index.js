import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cabecera from './Cabecera';
import Menu from './Menu';
import Articulos from './Articulos';
import Piesito from './Piesito';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  	<Cabecera />
	<Menu />
	<Articulos />
	<App />
	<Piesito />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
