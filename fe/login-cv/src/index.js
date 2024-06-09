import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterCustom from './router';
import './component/style/style.scss'
import RouterOutlet from './component/app/theme/router/router';
import App from './component/app/app';
import HomePage from './component/app/manager/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));

function getCookie(cookie) {
  let value = cookie.split(';');
  console.log('cookie : ', value);
  return value[0] == "" ||value[0] == "NaN" || value[0] == undefined || value == "undefined" ? null : value[0];

}
const token = getCookie(document.cookie);
debugger
if (token != null && token != "null" && token != "" && token != undefined && token != "NaN") {
  root.render(
    <BrowserRouter>
      <App>
      <Route path="http://localhost:3000/home" element={<HomePage />}>
        </Route>
      </App>
    </BrowserRouter>
  );
} else {
  root.render(
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  );
}



