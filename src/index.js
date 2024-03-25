import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

/* Revisado desde la documentación oficial.
 Asi se usaba en la versión 17 */
import { render } from 'react-dom';
const container = document.getElementById('root');
render(<App tab="home" />, container);
