// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbarTrigger = document.getElementById('navbarTrigger');
    const navbarReveal = document.getElementById('navbarReveal');
    let isActive = false;

    // Toggle navbar on click
    navbarTrigger.addEventListener('click', function() {
        isActive = !isActive;
        navbarReveal.classList.toggle('active', isActive);
        
        // Add keyboard accessibility
        if (isActive) {
            navbarReveal.setAttribute('tabindex', '0');
            navbarReveal.focus();
        } else {
            navbarReveal.removeAttribute('tabindex');
        }
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbarTrigger.contains(event.target) && 
            !navbarReveal.contains(event.target) && 
            isActive) {
            navbarReveal.classList.remove('active');
            isActive = false;
        }
    });

    // Keyboard navigation support
    navbarTrigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navbarTrigger.click();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isActive) {
            navbarReveal.classList.remove('active');
            isActive = false;
            navbarTrigger.focus();
        }
    });

    // Add focus styles for accessibility
    navbarTrigger.addEventListener('focus', function() {
        this.style.outline = '2px solid rgba(255, 255, 255, 0.5)';
    });

    navbarTrigger.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});
