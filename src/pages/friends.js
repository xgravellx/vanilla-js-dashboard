import { translate } from '../translations';

export default function Friends() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h1>${translate('friends')}</h1>
    `;
    return pageElement;
}
