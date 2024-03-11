import { PrivateRouteList, PublicRouteList } from './routeList';
import ErrorPage from '../pages/errorPage';
import Dashboard from '../pages/dashboard';

export const Routes = (isLogin) => {
    const accessibleRoutes = !isLogin ? PublicRouteList : { ...PublicRouteList, ...PrivateRouteList };

    const path = window.location.pathname;
    const Component = accessibleRoutes[path];

    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    if (!isLogin && PrivateRouteList[path]) {
        window.location.pathname = '/login';
        return;
    }

    if (Component && isLogin && !PublicRouteList[path]) {
        const dashboardElement = Dashboard();
        appElement.appendChild(dashboardElement);

        window.addEventListener('popstate', () => {
            const newPath = window.location.pathname;
            const newComponent = accessibleRoutes[newPath];

            const pageMainElement = document.getElementById('page-main');
            pageMainElement.innerHTML = '';

            if (newComponent) {
                pageMainElement.appendChild(newComponent());
            }
        });
    } else if (Component && isLogin && PublicRouteList[path]) {
        appElement.appendChild(Component());
    } else if (Component && !isLogin) {
        appElement.appendChild(Component());
    } else {
        appElement.appendChild(ErrorPage());
    }
};
