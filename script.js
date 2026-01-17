
var typed = new Typed('.txt', { 
    strings: ['Full Stack Developer', 'Web Designer'], 
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 1. Add class to start animation when visible
      entry.target.classList.add('active');
    } else {
      // 2. Remove class when it leaves the screen to "reset" it
      entry.target.classList.remove('active');
    }
  });
}, { 
  threshold: 0.1 // Triggers when 10% of the element is visible
});

// Apply to all your text elements
document.querySelectorAll('.write').forEach((el) => {
  observer.observe(el);
});

const observ = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 1. Add class to start animation when visible
      entry.target.classList.add('active');
    } else {
      // 2. Remove class when it leaves the screen to "reset" it
      entry.target.classList.remove('active');
    }
  });
}, { 
  threshold: 0.1 // Triggers when 10% of the element is visible
});

// Apply to all your text elements
document.querySelectorAll('.skilcard').forEach((el) => {
  observ.observe(el);
});


  
    // We use a click listener on the whole document to ensure it finds the elements
    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.onclick = function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                // Debugging: This will show in your browser console (F12)
                console.log("Menu toggled!"); 
            };
        } else {
            console.error("Could not find hamburger or nav-menu IDs");
        }
    });
