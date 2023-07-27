/**
* File primary-navigation.js.
*
* Required to open and close the mobile navigation.
*/
const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("btnHamburger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (this.scrollY >= 85) {
        header.classList.add("on-scroll");
    } else {
        header.classList.remove("on-scroll");
    }
});

// Show and Hide Navbar Function
const toggleMenu = () => {
    navbarMenu.classList.toggle("active");
    overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
    navbarMenu
    .querySelector(".menu-dropdown.active .submenu")
    .removeAttribute("style");
    navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
    if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
        e.preventDefault();
        const menuDropdown = e.target.parentElement;
        
        // If Dropdown is Expanded, then Collapse It
        if (menuDropdown.classList.contains("active")) {
            collapseSubMenu();
        } else {
            // Collapse Existing Expanded Dropdown
            if (navbarMenu.querySelector(".menu-dropdown.active")) {
                collapseSubMenu();
            }
            
            // Expanded the New Dropdown
            menuDropdown.classList.add("active");
            const subMenu = menuDropdown.querySelector(".submenu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
    }
};

//  Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

// Fixed Resize Window Function
const resizeWindow = () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("active")) {
            toggleMenu();
        }
        if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
        }
    }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);

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