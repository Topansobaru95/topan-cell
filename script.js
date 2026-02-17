// ==========================================
// TOPAN CELL - JavaScript Interactive Features
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initHamburgerMenu();
    initSmoothScroll();
    initServiceCardsAnimation();
    initScrollAnimations();
});

// ==========================================
// HAMBURGER MENU FUNCTIONALITY
// ==========================================
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// SERVICE CARDS ANIMATION
// ==========================================
function initServiceCardsAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        // Add staggered animation delay
        card.style.animation = `slideInUp 0.6s ease forwards`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add click interaction
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    // Add animation styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Intersection Observer untuk animasi saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Observe contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
}

// ==========================================
// CTA BUTTON FUNCTIONALITY
// ==========================================
function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const layananSection = document.getElementById('layanan');
            if (layananSection) {
                layananSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Call CTA button function
initCTAButton();

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.2)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.1)';
    }
});

// ==========================================
// PARALLAX EFFECT FOR HERO SECTION
// ==========================================
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        }
    });
}

initParallaxEffect();

// ==========================================
// FLOATING CUBES ANIMATION ENHANCEMENT
// ==========================================
function initFloatingCubes() {
    const cubes = document.querySelectorAll('.floating-cube');
    
    cubes.forEach((cube, index) => {
        // Random initial rotation
        const randomRotation = Math.random() * 360;
        cube.style.transform = `rotate(${randomRotation}deg)`;
        
        // Add subtle mouse interaction
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const cubeX = (mouseX * 50 - 25) * (index + 1);
            const cubeY = (mouseY * 50 - 25) * (index + 1);
            
            cube.style.transform = `translate(${cubeX}px, ${cubeY}px) rotate(${randomRotation}deg)`;
        });
    });
}

initFloatingCubes();

console.log('TOPAN CELL - Website loaded successfully! 🚀');
