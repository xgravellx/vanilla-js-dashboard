const routes = {
    '/login': 'login.html',
    '/home': 'home.html'
};

// Kullanıcı oturum durumunu saklamak için basit bir değişken
let isLoggedIn = false;

function onRouteChange() {
    const pathName = window.location.pathname;
    const rootDiv = document.getElementById('app');

    if (pathName === '/home') {
    // Burada kullanıcı oturum durumunu kontrol ediyoruz
        if (isLoggedIn) {
            // Eğer kullanıcı oturumu açıksa, home sayfasını yüklüyoruz
            rootDiv.innerHTML = routes[pathName];
        } else {
            // Eğer kullanıcı oturumu kapalıysa, login sayfasına yönlendiriyoruz
            window.history.pushState({}, pathName, '/login');
            rootDiv.innerHTML = routes['/login'];
        }
    } else if (pathName === '/login') {
    // Burada public route'ları yüklüyoruz
        rootDiv.innerHTML = routes[pathName];
    } else {
    // Burada geçersiz bir yol için 404 sayfasını gösteriyoruz
        rootDiv.innerHTML = '404 Not Found';
    }
}

// Sayfa yüklendiğinde ilk route değişikliğini tetikliyoruz
window.addEventListener('load', onRouteChange);

// Herhangi bir route değişikliğinde fonksiyonumuzu çağırıyoruz
window.addEventListener('popstate', onRouteChange);
