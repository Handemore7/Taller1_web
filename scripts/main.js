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

/* Interaction */
/* In this first case the interaction will be to click one of the three cards, the clicked one will show the content and delete the div that is in front
    The objective of interacion is that when the user clicks in some card, this will dissapear in the way that the user clicks with the mouse and hold it */

var cardHiddenLeft = document.querySelector('.interaction__cardHidden--left');
var cardHiddenCenter = document.querySelector('.interaction__cardHidden--center');
var cardHiddenRight = document.querySelector('.interaction__cardHidden--right');

var handleClickAnyCard = function (event) {
    cardHiddenLeft.classList.remove('interaction__cardHidden');
}

var removeAnimation = function (event) {
    cardHiddenLeft.style.width='0px';
    cardHiddenLeft.style.padding='0px';
    cardHiddenLeft.style.opacity='0';
}

var removeAnimation2 = function (event) {
    cardHiddenLeft.classList.add('animate');
    cardHiddenLeft.classList.remove('interaction__cardHidden');

}

//cardHiddenLeft.addEventListener('click', handleClickAnyCard);
cardHiddenLeft.addEventListener('click', removeAnimation2);