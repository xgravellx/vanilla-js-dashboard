import { translate } from '../translations';

export default function Friends() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h3 class="p-4 text-custom-light">${translate('friends')}</h3>
        <div class="content-area p-4">
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg bg-transparent">
            <div class="container-fluid">
              <a class="navbar-brand text-custom-light" href="#">Friends</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a href="/pages/friends/friendsall.html" class="nav-link text-custom-light">All</a>
                  </li>
                  <li class="nav-item">
                    <a href="friendspending.html" class="nav-link text-custom-light">Pending</a>
                  </li>
                  <li class="nav-item">
                    <a href="friendsadd.html" class="nav-link text-custom-light">Add Friend</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <!-- Friend List -->
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              nkalyonc
              <button class="btn btn-primary">Oyuna Davet Et</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              bbolat
              <button class="btn btn-primary">Oyuna Davet Et</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              mukeles
              <button class="btn btn-primary">Oyuna Davet Et</button>
            </li>
          </ul>
        </div>
    `;
    return pageElement;
}
