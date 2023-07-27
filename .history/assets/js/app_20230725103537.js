/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true, // Animation repeat
})

sr.reveal('.home__img, .footer__logo, .footer__description, .footer__content')
sr.reveal('.home__data', {origin: 'bottom'})
sr.reveal('.coneShaped__data', {origin: 'left'})
sr.reveal('.coneShaped__img', {origin: 'right'})

// Signature
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c with <3 by @jmg \u2730 http://www.2212.fr/ \n\n','background: #1C4F96; padding:5px 0;color: #333333;'];
    window.console.log.apply(console, args);
} else if (window.console) {
    window.console.log('@jmg - http://www.2212.fr/');
}


