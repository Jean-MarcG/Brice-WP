/**
* File primary-navigation.js.
*
* Required to open and close the mobile navigation.
*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true, // Animation repeat
})

sr.reveal('.home__img, .footer__logo, .footer__description, .footer__content, .footer__info')
sr.reveal('.home__data', {origin: 'bottom'})
sr.reveal('.coneShaped__data, .croquembouche__data, .customized__data, .numberCake__data, .israel__data, .about__data', {origin: 'left'})
sr.reveal('.coneShaped__img, .croquembouche__img, .customized__img, .numberCake__img, .israel__img, .about__img', {origin: 'right'})

/*=============== LIGHTBOX INIT ===============*/
const lb = lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true,
	'disableScrolling': true,
})


// Signature
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c with <3 by @jmg \u2730 http://www.2212.fr/ \n\n','background: #1C4F96; padding:5px 0;color: #333333;'];
    window.console.log.apply(console, args);
} else if (window.console) {
    window.console.log('@jmg - http://www.2212.fr/');
}


