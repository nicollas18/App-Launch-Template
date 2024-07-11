function menuMobileDisplay() {
    const menu = document.getElementById('menuMobile');
    
    if (menu.className.indexOf('menuDisplay') == -1) {
        menu.className += ' menuDisplay';
    } else {
        menu.className = menu.className.replace(" menuDisplay", "");
    }
}