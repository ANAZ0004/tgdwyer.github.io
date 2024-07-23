document.addEventListener('DOMContentLoaded', () => { 
    const documentBody = document.querySelector('body');

    let darkModeState = JSON.parse(localStorage.getItem('darkModeState'));

    if (!darkModeState) {
        darkModeState = false;
        localStorage.setItem('darkModeState', JSON.stringify(darkModeState));
    };

});