import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Normalize } from "styled-normalize";
import App from './components/App/App.jsx';
// import "normalize.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <React.Fragment>
      <Normalize /> */}
    <App />
    {/* </React.Fragment> */}
  </React.StrictMode>
);
