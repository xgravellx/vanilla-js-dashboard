import { translate } from '../translations';

export default function Game() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h3 class="p-4 text-custom-light">${translate('game')}</h3>
    `;
    return pageElement;
}
