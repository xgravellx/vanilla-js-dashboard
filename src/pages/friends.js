import { translate } from '../translations';

export default function Friends() {
    const pageElement = document.createElement('div');
    pageElement.innerHTML = `
        <h1>Friends</h1>
        <div data-translate-key="yes"></div>
    `;
    return pageElement;
}
