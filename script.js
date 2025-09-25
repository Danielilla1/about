// script.js (updated with scrolling support)
document.addEventListener('DOMContentLoaded', function() {
    // Create stars for background
    createStars();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Payment modal functionality
    const modal = document.getElementById('payment-modal');
    const closeBtn = document.querySelector('.close');
    const buyButtons = document.querySelectorAll('.buy-btn');
    const paymentCards = document.querySelectorAll('.payment-card');
    const confirmPaymentBtn = document.getElementById('confirm-payment');
    
    let selectedPlanet = null;
    let selectedMethod = null;
    
    // Open modal when buy button is clicked
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get planet data
            selectedPlanet = {
                name: this.previousElementSibling.previousElementSibling.textContent,
                price: this.getAttribute('data-price')
            };
            
            // Update modal content
            document.getElementById('modal-planet-name').textContent = selectedPlanet.name;
            document.getElementById('modal-planet-price').textContent = formatPrice(selectedPlanet.price);
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body
        });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling on body
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling on body
        }
    });
    
    // Select payment method
    paymentCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            paymentCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Set selected method
            selectedMethod = this.getAttribute('data-method');
        });
    });
    
    // Confirm payment
    confirmPaymentBtn.addEventListener('click', function() {
        if (!selectedMethod) {
            alert('Please select a payment method');
            return;
        }
        
        // Show confirmation
        alert(`Payment confirmed with ${selectedMethod.charAt(0).toUpperCase() + selectedMethod.slice(1)}! Your planet is on its way.`);
        
        // Close modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling on body
        
        // Reset selections
        selectedPlanet = null;
        selectedMethod = null;
        paymentCards.forEach(c => c.classList.remove('selected'));
    });
    
    // Button click effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create travel effect
            const travelEffect = document.createElement('div');
            travelEffect.className = 'travel-effect';
            this.appendChild(travelEffect);
            
            // Remove effect after animation completes
            setTimeout(() => {
                travelEffect.remove();
            }, 600);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            // Position ripple at click location
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size/2;
            const y = e.clientY - rect.top - size/2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3;
        
        // Random animation duration and delay
        const duration = 2 + Math.random() * 5;
        const delay = Math.random() * 5;
        const opacity = 0.2 + Math.random() * 0.8;
        
        // Add movement properties
        const moveX = (Math.random() - 0.5) * 20;
        const moveY = (Math.random() - 0.5) * 20;
        const moveDuration = 5 + Math.random() * 10;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--move-x', `${moveX}px`);
        star.style.setProperty('--move-y', `${moveY}px`);
        star.style.setProperty('--move-duration', `${moveDuration}s`);
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

function formatPrice(price) {
    // Convert to trillions format
    const trillions = parseInt(price) / 1000000000000;
    return `${trillions.toFixed(1)} Trillion Credits`;
}
