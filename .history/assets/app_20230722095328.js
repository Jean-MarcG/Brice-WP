// Intersection observer scroll reveal
const sections = document.querySelectorAll("section");

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        if (isIntersecting) {
            target.classList.add("visible");
            observer.unobserve(target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2,
});

sections.forEach((section) => {
    const sectionChildren = [...section.children];
    sectionChildren.forEach((child, index) => {
        observer.observe(child);
        child.style.setProperty("--transition-delay", `${index * 0.1}s`);
    });
});


// Signature
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c with <3 by @jmg \u2730 http://www.2212.fr/ \n\n','background: #1C4F96; padding:5px 0;color: #333333;'];
    window.console.log.apply(console, args);
} else if (window.console) {
    window.console.log('@jmg - http://www.2212.fr/');
}


