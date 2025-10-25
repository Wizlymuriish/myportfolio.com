// Typing Effect
const texts = ["A Web Developer", "UI/UX Designer", "A Web Designer"];
const typingElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 700); // Pause at end
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Image error handling for profile
document.querySelector('.profile-image').addEventListener('error', function() {
    this.src = 'https://via.placeholder.com/300x300/0d9488/FFFFFF?text=WM';
    this.alt = 'Wilfred Muriithi';
});

// Image error handling for project images
document.querySelectorAll('.project-img img').forEach(img => {
    img.addEventListener('error', function() {
        this.parentElement.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);display:flex;align-items:center;justify-content:center;color:white;font-size:3rem;"><i class="fas fa-code"></i></div>';
    });
});

// Initialize typing effect when DOM is ready
document.addEventListener("DOMContentLoaded", typeEffect);