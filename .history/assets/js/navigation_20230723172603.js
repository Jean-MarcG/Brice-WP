/**
* File primary-navigation.js.
*
* Required to open and close the mobile navigation.
*/

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (this.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
    } else {
        headerMenu.classList.remove("on-scroll");
    }
});

// Sticky
window.addEventListener("scroll", function() {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY)
})