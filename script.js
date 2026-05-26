// --- Custom Dynamic Typing Animation ---
const typingText = document.querySelector('.typing-text');
const words = ["Building Responsive Interfaces...", "Writing Clean & Clean Code...", "Optimizing Conversion UI/UX..."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2; // Delete faster
    }

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at top full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Brief pause before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Initializing the typing sequence on page render
document.addEventListener('DOMContentLoaded', () => {
    if (words.length) setTimeout(type, 1000);
});

// --- Simple Mobile Menu Navigation Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        // Toggle utility class depending on state (Can expand style rules further)
        alert('Mobile navigation layout active! Modify CSS rules for specific sidebar expansion if desired.');
    });
}
