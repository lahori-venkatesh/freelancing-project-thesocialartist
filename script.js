/* 
  ========================================== THE SOCIAL ARTIST - MAIN JAVASCRIPT ==========================================
  
  This JavaScript file contains all the interactive functionality for The Social Artist website including:
  - Theme toggle functionality (light/dark mode)
  - Portfolio item management and animations
  - Mobile menu functionality
  - Animation and scroll effects
  - Form handling and validation
  
  Author: Lahori Venkatesh
  Version: 2.0 (Updated with Dark Mode & Enhanced UI)
  Last Updated: 2025
*/

/* ========================================== TAILWIND CONFIGURATION ========================================== */
// Tailwind CSS Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#dc2626',
                secondary: '#fef2f2'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            }
        }
    }
};

/* ========================================== PORTFOLIO DATA ========================================== */
// Portfolio Data
const portfolioItems = [
    {
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e9064aae2d9e883a5ccfd07c8c05e0d7.jpeg",
        title: "Product Packaging Design"
    },
    {
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/2b59c2df5fccb82a948e445272e7cdcb.jpeg",
        title: "Ladies Night Campaign"
    },
    {
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/5b4c9c60e3d498a17fe3300baf6df848.jpeg",
        title: "Ladies Night Campaign"
    },
    {
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/f1e008baf4af82e2f80ecde89f80f360.jpeg",
        title: "Product Photography"
    },
    {
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/acbb2332457c6997c4275a417dfecf54.png",
        title: "Multi-Device Connection"
    },
    {
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e90461f78729bcbfc33d64747b00f76a.png",
        title: "Social Media Campaign"
    }
];

/* ========================================== PORTFOLIO FUNCTIONS ========================================== */
// Portfolio Functions
function createPortfolioItem(item) {
    return `
        <div class="group relative overflow-hidden rounded-lg w-[280px] sm:w-[400px]">
            <img src="${item.image}"
                 alt="Portfolio Item"
                 class="w-full h-48 sm:h-64 object-cover">
            <div class="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg sm:text-xl font-bold text-white text-center px-4">${item.title}</h3>
            </div>
        </div>
    `;
}

function loadPortfolioItems() {
    const container = document.getElementById('portfolioContainer');
    portfolioItems.forEach(item => {
        container.innerHTML += createPortfolioItem(item);
    });
}

function cloneAndAppendItems() {
    const container = document.getElementById('portfolioContainer');
    const items = Array.from(container.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });
}

/* ========================================== ANIMATION FUNCTIONS ========================================== */
// Animation Functions
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.querySelector('div').textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/* ========================================== THEME TOGGLE FUNCTIONALITY ========================================== */
// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const mobileThemeIcon = document.getElementById('mobileThemeIcon');
    
    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    updateThemeIcon(currentTheme);
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        const iconClass = theme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
        themeIcon.className = iconClass + ' text-xl text-gray-700 dark:text-gray-300';
        mobileThemeIcon.className = iconClass + ' text-xl text-gray-700 dark:text-gray-300';
    }
    
    // Add event listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
}

/* ========================================== DOM INITIALIZATION ========================================== */
// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize portfolio
    loadPortfolioItems();
    
    // Portfolio animation
    const container = document.getElementById('portfolioContainer');
    let scrollPosition = 0;
    let scrollDirection = 1;
    
    function animate() {
        const maxScroll = container.scrollWidth / 2;
        scrollPosition += scrollDirection;
        if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
        }
        container.style.transform = `translateX(${-scrollPosition}px)`;
        requestAnimationFrame(animate);
    }
    
    container.addEventListener('mouseenter', () => {
        scrollDirection = 0;
    });
    
    container.addEventListener('mouseleave', () => {
        scrollDirection = 1;
    });
    
    cloneAndAppendItems();
    animate();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('stats-count')) {
                    animateValue(entry.target, 0, parseInt(entry.target.dataset.target), 2000);
                }
            }
        });
    });
    
    document.querySelectorAll('.stats-count').forEach(el => observer.observe(el));
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Initialize EmailJS
        emailjs.init('gcULbDlD5aK8ODPg3');

        // Collect form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Send the email using EmailJS
        emailjs.send('service_9zk5y8k', 'template_o0q7gpv', {
            from_name: data.name,
            from_email: data.email,
            message: data.message
        }).then(response => {
            console.log('Email sent successfully:', response);

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 translate-x-full';
            successMessage.textContent = 'Message sent successfully!';
            document.body.appendChild(successMessage);

            // Slide in success message
            setTimeout(() => {
                successMessage.style.transform = 'translateX(0)';
            }, 100);

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.transform = 'translateX(100%)';
                setTimeout(() => successMessage.remove(), 300);
            }, 3000);

            // Reset form
            document.getElementById('contactForm').reset();
        }).catch(error => {
            console.error('Email sending failed:', error);
            
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg';
            errorMessage.textContent = 'Failed to send message. Please try again.';
            document.body.appendChild(errorMessage);

            setTimeout(() => errorMessage.remove(), 3000);
        });
    });
});

// Support Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const supportBtn = document.getElementById('supportBtn');
    const supportPanel = document.getElementById('supportPanel');
    const closeSupport = document.getElementById('closeSupport');
    const supportQuestions = document.querySelectorAll('.support-question');
    const startChat = document.getElementById('startChat');

    // Toggle support panel
    if (supportBtn && supportPanel) {
        supportBtn.addEventListener('click', () => {
            supportPanel.classList.toggle('hidden');
        });

        if (closeSupport) {
            closeSupport.addEventListener('click', () => {
                supportPanel.classList.add('hidden');
            });
        }
    }

    // Handle support questions
    if (supportQuestions) {
        supportQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const questionType = question.getAttribute('data-question');
                let answer = '';
                
                switch(questionType) {
case 'timeline':
answer = 'We pride ourselves on speed! Most projects are completed in 2-3 weeks. Social media campaigns can start showing results within the first week.';
break;
case 'services':
answer = 'We offer Branding & Identity, Social Media Management, Performance Marketing, and Content Creation. Each service is tailored to your business goals.';
break;
case 'process':
answer = 'Our 4-step process: Discovery (1-2 days), Strategy (3-5 days), Execution (6-14 days), and Results (ongoing). We keep you updated throughout!';
break;
}
                
                showSupportMessage(answer);
            });
        });
    }

    // Handle live chat
    if (startChat) {
        startChat.addEventListener('click', () => {
            showSupportMessage('Our team is online! Please call us at +91 8506044943 or email hello@thesocialartist.in for immediate assistance. We typically respond within 30 minutes.');
        });
    }

    // Show support message
    function showSupportMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50';
        messageDiv.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 mb-2">💬 Support</h4>
                    <p class="text-sm text-gray-600">${message}</p>
                </div>
                <button class="ml-4 text-gray-400 hover:text-gray-600" onclick="this.parentElement.parentElement.remove()">
                    <i class="ri-close-line"></i>
                </button>
            </div>
        `;
        document.body.appendChild(messageDiv);
        
        // Auto remove after 8 seconds
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.remove();
            }
        }, 8000);
    }
});
