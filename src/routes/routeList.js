import Login from '../pages/auths/login';
import Profile from '../pages/profile';
import Dashboard from '../pages/dashboard';
import Register from '../pages/auths/register';

export const PublicRouteList = {
    '/login': Login,
    '/register': Register
};

export const PrivateRouteList = {
    '/': Dashboard,
    '/profile': Profile
};