import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './static/css/master.css';
import {BrowserRouter} from 'react-router-dom'
import ProjectRoutes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <ProjectRoutes/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
