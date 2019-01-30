const hbs = require('hbs');

//Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalize', (texto) => {
    let words = texto.split(' ');
    words.forEach((element, idx) => {
        words[idx] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return words.join(' ');
})