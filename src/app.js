import './app.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './translations/tr.js';
import './translations/en.js';

import { Routes } from './routes/routes';
import { setLanguage } from './translations';

const App = () => {
    const isLogin = true;

    Routes(isLogin);

    const languageTR = document.getElementById('languageTR');
    const languageEN = document.getElementById('languageEN');

    languageTR.addEventListener('click', () => {
        setLanguage('TR');
    });

    languageEN.addEventListener('click', () => {
        setLanguage('EN');
    });

};

window.addEventListener('DOMContentLoaded', App);
window.addEventListener('popstate', Routes);
