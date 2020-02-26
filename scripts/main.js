/* Hamburger Menu Button */

var hamburgerBtn = document.querySelector('.mainHeader__menu');
var mainHeaderNav = document.querySelector('.mainHeader__navigation');
console.log();

var handleClickHamburgerMenu = function (event) {
    console.log(event);
    var hasMobile = mainHeaderNav.classList.contains('mainHeader__navigation--mobile');
    if(hasMobile){
        mainHeaderNav.classList.remove('mainHeader__navigation--mobile');
    } else {
        mainHeaderNav.classList.add('mainHeader__navigation--mobile');
    }
}

hamburgerBtn.addEventListener('click', handleClickHamburgerMenu);
