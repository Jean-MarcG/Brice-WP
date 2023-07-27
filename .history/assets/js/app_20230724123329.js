/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Signature
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c with <3 by @jmg \u2730 http://www.2212.fr/ \n\n','background: #1C4F96; padding:5px 0;color: #333333;'];
    window.console.log.apply(console, args);
} else if (window.console) {
    window.console.log('@jmg - http://www.2212.fr/');
}


