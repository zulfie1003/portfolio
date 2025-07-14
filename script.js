// DOM Elements
const themeSwitch = document.getElementById('theme-switch');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const skillFills = document.querySelectorAll('.skill-fill');

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeSwitch.checked = newTheme === 'dark';
}

// Mobile Navigation
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth Scrolling
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        closeMobileMenu();
    }
}

// Dynamic Skills Section
let skills = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'Java (Primary)', percent: 95 },
            { name: 'C/C++', percent: 70 },
            { name: 'Python', percent: 65 },
            { name: 'JavaScript', percent: 80 },
            { name: 'HTML5', percent: 85 },
            { name: 'CSS3', percent: 80 }
        ]
    },
    {
        category: 'Java Backend',
        items: [
            { name: 'Spring Boot', percent: 85 },
            { name: 'Spring MVC', percent: 80 },
            { name: 'Spring Security', percent: 75 },
            { name: 'Hibernate', percent: 75 },
            { name: 'REST APIs', percent: 85 },
            { name: 'Maven', percent: 80 },
            { name: 'Gradle', percent: 70 },
            { name: 'JUnit', percent: 75 },
            { name: 'Mockito', percent: 70 }
        ]
    },
    {
        category: 'DSA',
        items: [
            { name: 'DSA (Java)', percent: 90 },
            { name: 'OOP', percent: 90 },
            { name: 'Arrays, LinkedList, String', percent: 85 },
            { name: 'Trees, Graphs, DP, Greedy', percent: 80 }
        ]
    },
    {
        category: 'Frontend',
        items: [
            { name: 'HTML', percent: 85 },
            { name: 'CSS', percent: 80 },
            { name: 'JavaScript', percent: 80 },
            { name: 'React.js (Basic)', percent: 60 }
        ]
    },
    {
        category: 'Databases',
        items: [
            { name: 'MySQL', percent: 80 },
            { name: 'MongoDB', percent: 70 },
            { name: 'JDBC', percent: 75 },
            { name: 'Spring Data JPA', percent: 75 }
        ]
    },
    {
        category: 'Backend Tools',
        items: [
            { name: 'IntelliJ', percent: 80 },
            { name: 'Eclipse', percent: 75 },
            { name: 'Git & GitHub', percent: 80 },
            { name: 'Postman', percent: 75 },
            { name: 'Docker (Basics)', percent: 60 },
            { name: 'CI/CD (Basics)', percent: 60 },
            { name: 'VS Code', percent: 70 }
        ]
    },
    {
        category: 'Other',
        items: []
    }
];

function renderSkills() {
    const skillBars = document.getElementById('skill-bars');
    skillBars.innerHTML = '';
    skills.forEach(group => {
        if (group.items.length === 0) return;
        const groupDiv = document.createElement('div');
        groupDiv.className = 'skill-group';
        groupDiv.innerHTML = `<h4 class="skill-category">${group.category}</h4>`;
        const badgesDiv = document.createElement('div');
        badgesDiv.className = 'skill-badges';
        group.items.forEach(skill => {
            const badge = document.createElement('span');
            badge.className = 'skill-badge';
            badge.textContent = skill.name;
            badgesDiv.appendChild(badge);
        });
        groupDiv.appendChild(badgesDiv);
        skillBars.appendChild(groupDiv);
    });
}

// Modal Logic
const addSkillBtn = document.getElementById('add-skill-btn');
const addSkillModal = document.getElementById('add-skill-modal');
const closeModal = document.getElementById('close-modal');
const addSkillForm = document.getElementById('add-skill-form');

if (addSkillBtn && addSkillModal && closeModal && addSkillForm) {
    addSkillBtn.onclick = () => {
        addSkillModal.style.display = 'flex';
    };
    closeModal.onclick = () => {
        addSkillModal.style.display = 'none';
        addSkillForm.reset();
    };
    window.onclick = function(event) {
        if (event.target === addSkillModal) {
            addSkillModal.style.display = 'none';
            addSkillForm.reset();
        }
    };
    addSkillForm.onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('skill-name').value.trim();
        const percent = parseInt(document.getElementById('skill-percent').value);
        if (name && percent >= 1 && percent <= 100) {
            // Add to 'Other' category
            const otherGroup = skills.find(g => g.category === 'Other');
            otherGroup.items.push({ name, percent });
            renderSkills();
            addSkillModal.style.display = 'none';
            addSkillForm.reset();
        }
    };
}

// Replace old skill bar animation with dynamic version
function animateSkillBars() {
    document.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = fill.getAttribute('data-percent') + '%';
        }, 100);
    });
}

// Scroll Reveal
function initScrollReveal() {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2500,
            delay: 400,
            reset: false
        });

        sr.reveal('.hero-text', { origin: 'left' });
        sr.reveal('.hero-card', { origin: 'right' });
        sr.reveal('.about-text', { origin: 'left' });
        sr.reveal('.skills-container', { origin: 'right' });
        sr.reveal('.flip-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.service-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.contact-info', { origin: 'left' });
        sr.reveal('.contact-form', { origin: 'right' });
    }
}

// Intersection Observer for Skill Bars
function initSkillBarObserver() {
    const skillsSection = document.querySelector('.skills-container');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }
}

// Form Validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name').trim()) {
        errors.push('Name is required');
    }
    
    if (!formData.get('email').trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('subject').trim()) {
        errors.push('Subject is required');
    }
    
    if (!formData.get('message').trim()) {
        errors.push('Message is required');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormErrors(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
    
    // Show new error messages
    errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.5rem';
        errorDiv.textContent = error;
        
        const form = document.querySelector('.contact-form');
        form.appendChild(errorDiv);
    });
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.color = '#10b981';
    successDiv.style.fontSize = '0.875rem';
    successDiv.style.marginTop = '0.5rem';
    successDiv.textContent = 'Message sent successfully!';
    
    const form = document.querySelector('.contact-form');
    form.appendChild(successDiv);
    
    // Clear form
    form.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Parallax Effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Download Resume
function downloadResume() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Update with your actual resume path
    link.download = 'YourName_Resume.pdf';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Hire Me Button
function handleHireMe() {
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize VanillaTilt
function initTilt() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize animations
    initScrollReveal();
    initSkillBarObserver();
    initParallax();
    initNavbarScroll();
    initTilt();
    
    // Theme toggle
    themeSwitch.addEventListener('change', toggleTheme);
    
    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const errors = validateForm(formData);
            
            if (errors.length > 0) {
                showFormErrors(errors);
            } else {
                // Simulate form submission
                showSuccessMessage();
                
                // In a real application, you would send the form data to a server
                // Example with Formspree:
                // fetch('https://formspree.io/f/your-form-id', {
                //     method: 'POST',
                //     body: formData,
                //     headers: {
                //         'Accept': 'application/json'
                //     }
                // })
                // .then(response => {
                //     if (response.ok) {
                //         showSuccessMessage();
                //     } else {
                //         showFormErrors(['Something went wrong. Please try again.']);
                //     }
                // })
                // .catch(error => {
                //     showFormErrors(['Something went wrong. Please try again.']);
                // });
            }
        });
    }
    
    // Download resume button
    const downloadBtn = document.querySelector('.btn-secondary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadResume);
    }
    
    // Hire me button
    const hireBtn = document.querySelector('.btn-primary');
    if (hireBtn) {
        hireBtn.addEventListener('click', handleHireMe);
    }
    
    // Scroll events
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// On DOMContentLoaded, render skills
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSkills);
} else {
    renderSkills();
}

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
    
    .success-message {
        color: #10b981;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
window.addEventListener('scroll', throttle(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
}, 100));

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle); 