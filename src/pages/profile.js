import { translate } from '../translations';

export default function Profile() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h3 class="p-4 text-custom-light">${translate('profile')}</h3>
    `;
    return pageElement;
}
