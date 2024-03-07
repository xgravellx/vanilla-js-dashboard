import { Routes } from './routes/routes';

const App = () => {
    const isLogin = true;

    Routes(isLogin);

};

window.addEventListener('DOMContentLoaded', App);
window.addEventListener('popstate', Routes);
