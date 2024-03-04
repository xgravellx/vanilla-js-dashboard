const routes = {
    '/login': 'login.html',
    '/register': 'register.html',
    '/': 'dashboard.html',
    '/game': 'game.html'
};

let isLoggedIn = true;

async function loadHtmlFile(path) {
    try {
        const response = await fetch(`${routes[path]}`);
        const html = await response.text();
        const rootDiv = document.getElementById('app');
        rootDiv.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function onRouteChange() {
    const pathName = window.location.pathname;

    if (isLoggedIn && pathName === '/') {
        loadHtmlFile(pathName);
    } else if (!isLoggedIn && (pathName === '/login' || pathName === '/register')) {
        loadHtmlFile(pathName);
    } else {
        window.history.pushState({}, pathName, '/login');
        loadHtmlFile('/login');
    }
}

// Sayfa yüklendiğinde ilk route değişikliğini tetikliyoruz
window.addEventListener('load', onRouteChange);

// Herhangi bir route değişikliğinde fonksiyonumuzu çağırıyoruz
window.addEventListener('popstate', onRouteChange);
