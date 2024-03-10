import '../styles/dashboard.css';
import { setLanguage, translate } from '../translations';

import Profile from './profile';
import Game from './game';
import Friends from './friends';

export default function Dashboard() {
    const pageElement = document.createElement('div');
    pageElement.id = 'wrapper';
    pageElement.className = 'd-flex flex-row vh-100 w-100 overflow-x-auto overflow-y-hidden bg-custom-primary';

    pageElement.innerHTML = `
        <div id="wrapper-content" class="d-flex vh-100 w-100">
            <!-- sidebar -->
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white vh-100 bg-custom-secondary" style="width: 280px;">
                <a href="/"
                   class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-4">Ping Pong Game</span>
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="/profile" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16">
                                <use xlink:href="#home"></use>
                            </svg>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/game" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16">
                                <use xlink:href="#speedometer2"></use>
                            </svg>
                            Game
                        </a>
                    </li>
                    <li>
                        <a href="/friends" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16">
                                <use xlink:href="#table"></use>
                            </svg>
                            Friends
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
            
            <!-- content -->
            <div class="content vh-100 w-100 overflow-auto">
                <div class="vh-100">
                    <div id="page-header" class="d-flex justify-content-end mb-3 mb-md-0 me-md-auto bg-custom-secondary p-3">
                        <div class="d-flex align-items-center justify-content-center mx-3">
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                               id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i class="fa-solid fa-globe"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="languageDropdown">
                                <li id="languageTR" class="dropdown-item">Türkçe</li>
                                <li id="languageEN" class="dropdown-item">İngilizce</li>
                            </ul>
                        </div>
                    </div>
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                               id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="40" height="40" class="rounded-circle me-2"
                                     style="margin-right: 10px;">
                                <strong>Niran Kalyoncuoğlu</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="page-title" class="px-2"></div>
                    <div id="page-main"></div>
                </div>
            </div>
        </div>
    `;

    const sidebarElementLinks = pageElement.querySelectorAll('.nav-link');
    sidebarElementLinks.forEach((link) => {

        link.addEventListener('click', (event) => {
            event.preventDefault();

            sidebarElementLinks.forEach((otherLink) => {
                otherLink.classList.remove('active');
            });
            link.classList.add('active');

            const selectedPath = link.getAttribute('href');
            const pageMainElement = document.getElementById('page-main');

            pageMainElement.innerHTML = ''; // Clear existing content

            switch (selectedPath) {
                case '/profile':
                    pageMainElement.appendChild(Profile());
                    break;
                case '/game':
                    pageMainElement.appendChild(Game());
                    break;
                case '/friends':
                    pageMainElement.appendChild(Friends());
                    break;
                default:
                    break;
            }
        });
    });

    return pageElement;
}
