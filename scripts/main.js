// Portfolio data
const portfolioData = {
    experience: [
        {
            title: "Information Technology Assistant",
            company: "Letshego Kenya",
            period: "January 2025 - Present",
            description: "Design and implement automated workflows using Microsoft Power Apps and Power Automate. Configure and deploy devices while managing IT infrastructure."
        },
        {
            title: "Full Stack Developer",
            company: "Erudite Digital Africa",
            period: "2024 - Present",
            description: "Developed software solutions and provided technology consulting. Collaborated with team on web and mobile applications."
        },
        {
            title: "Machine Learning Intern",
            company: "HubbleMind",
            period: "December 2024",
            description: "Developed ML solution for obesity level estimation with 91% accuracy. Implemented end-to-end ML pipeline using Python, pandas, and scikit-learn."
        },
        {
            title: "Technology Consultant",
            company: "Calm&Zest Enterprises",
            period: "2022 - 2024",
            description: "Led technological transformation initiatives. Implemented automated systems including POS integration."
        }
    ],
    projects: [
        {
            title: "Erudite Digital Africa",
            description: "A comprehensive fintech startup website featuring a blog, form submission system, and pricing details.",
            technologies: ["Next.js", "Node.js", "MongoDB"],
            liveUrl: "https://eruditedigital.com/",
            githubUrl: null
        },
        {
            title: "Calm&Zest Enterprises",
            description: "E-commerce website for a bottled water business, featuring advanced notification and payment systems.",
            technologies: ["Next.js", "React", "Node.js", "Mpesa API", "WhatsApp API"],
            liveUrl: "https://calmandzest.co.ke/",
            githubUrl: null
        },
        {
            title: "Student-Zone",
            description: "AI-powered educational web app offering PDF summaries, question generators, chatbots, and more.",
            technologies: ["Next.js", "TensorFlow.js", "Gemini API", "Groq API"],
            liveUrl: "https://studentszone.vercel.app/",
            githubUrl: null
        },
        {
            title: "Czest Analytics",
            description: "AI-powered business analytics platform featuring real-time performance tracking, inventory management, and intelligent automation.",
            technologies: ["Next.js", "TypeScript", "Radix UI", "Google Cloud"],
            liveUrl: "https://czest-analytics.vercel.app/",
            githubUrl: "https://github.com/ShalomObongo/czest-analytics"
        },
        {
            title: "Student-Sphere",
            description: "All-in-one mobile application for students to access study materials, chat with tutors, and manage tasks.",
            technologies: ["React Native", "Firebase", "Node.js"],
            liveUrl: null,
            githubUrl: "https://github.com/ShalomObongo/Student-Sphere"
        },
        {
            title: "QuantumFile",
            description: "AI-powered file organization desktop app using Google's Gemini AI for intelligent file analysis and automated organization.",
            technologies: ["Electron", "React", "TypeScript", "Gemini AI"],
            liveUrl: null,
            githubUrl: "https://github.com/ShalomObongo/QuantumFile"
        }
    ],
    skills: {
        "Frontend": ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL"],
        "Mobile": ["React Native", "Expo"],
        "Tools & Others": ["Git", "Docker", "AWS", "Google Cloud", "Figma", "VS Code"]
    }
};

// Typing animation
const typingTexts = [
    "Full Stack Developer",
    "Technology Consultant", 
    "Mobile App Developer",
    "AI Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }
    
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeWriter, typingSpeed);
}

// Mobile navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Populate experience timeline
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3>${exp.title}</h3>
            <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">${exp.company}</h4>
            <p style="color: var(--text-secondary); margin-bottom: 1rem; font-style: italic;">${exp.period}</p>
            <p style="color: var(--text-secondary);">${exp.description}</p>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Populate projects grid
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const links = [];
        if (project.liveUrl) {
            links.push(`<a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener">Live Demo</a>`);
        }
        if (project.githubUrl) {
            links.push(`<a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener">GitHub</a>`);
        }
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${links.join('')}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Populate skills section
function populateSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        skillCategory.innerHTML = `
            <h3>${category}</h3>
            <ul class="skill-list">
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        skillsContainer.appendChild(skillCategory);
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // For now, just show an alert (in a real implementation, you'd send this to a server)
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.timeline-item, .project-card, .skill-category, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScrolling();
    populateExperience();
    populateProjects();
    populateSkills();
    initContactForm();
    initScrollAnimations();
    
    // Start typing animation
    setTimeout(typeWriter, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    }
});
