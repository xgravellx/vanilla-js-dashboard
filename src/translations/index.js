import trLanguage from './tr.js';
import enLanguage from './en.js';

// todo: localstorage a kaydet oradan değeri al
let currentLanguage = 'TR';

const translations = {
    TR: trLanguage,
    EN: enLanguage
};

export const setLanguage = (lang) => {
    currentLanguage = lang;
};

export const translate = (key) => {
    const translationObject = translations[currentLanguage];
    return translationObject[key] || key;
};
