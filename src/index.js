import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
let sidebar = document.querySelector('.sidebar');
let menu_btn = document.getElementById('menu')
menu_btn.onclick = () => {
    if (menu_btn.classList.contains('bi-list')) {
        menu_btn.classList.add('bi-x')
        menu_btn.classList.remove('bi-list')
        sidebar.style.left = 0;
    }
    else {
        menu_btn.classList.remove('bi-x')
        menu_btn.classList.add('bi-list')
        sidebar.style.left = "-260px";
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
