import { translate } from '../translations';

export default function Game() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h1>${translate('game')}</h1>
        <h1></h1>
    `;
    return pageElement;
}
