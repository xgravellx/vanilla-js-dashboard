import { translate } from '../translations';

export default function Profile() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h1>${translate('profile')}</h1>
    `;
    return pageElement;
}
