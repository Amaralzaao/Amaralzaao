import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { URLS } from './routes';

import "./static/scss/_fonts.scss"
import "./static/scss/global.scss"
import "./static/scss/IndexView.scss"
import "./static/scss/AboutSectionWidget.scss"
import "./static/scss/ExperienceSectionWidget.scss"
import "./static/scss/LanguageSectionWidget.scss"
import "./static/scss/CoursesSectionWidget.scss"
import "./static/scss/InitialAnimationView.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <URLS/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
