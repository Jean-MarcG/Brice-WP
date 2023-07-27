/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Signature
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c with <3 by @jmg \u2730 http://www.2212.fr/ \n\n','background: #1C4F96; padding:5px 0;color: #333333;'];
    window.console.log.apply(console, args);
} else if (window.console) {
    window.console.log('@jmg - http://www.2212.fr/');
}


