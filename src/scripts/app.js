function route(path) {
    const pages = {
        '/': 'login',
        '/home': 'home'
    };

    const validPaths = Object.keys(pages);

    if (!validPaths.includes(path)) {
        path = '/';
    }

    const isLoggedIn = true; // Kullanıcı giriş yaptı mı kontrolü
    if (!isLoggedIn && path === '/home') {
        path = '/';
    }

    const pageName = pages[path];
    fetch(`./pages/${pageName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
        })
        .catch(error => console.error(error));
}

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.slice(1);
    route(hash || '/');
});
