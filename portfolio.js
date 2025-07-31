// Tailwind CSS Configuration
tailwind.config = {
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

// Enhanced Portfolio Data with Categories
const portfolioItems = [
    // Branding Projects
    {
        id: 1,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e9064aae2d9e883a5ccfd07c8c05e0d7.jpeg",
        title: "Product Packaging Design",
        category: "branding",
        client: "Food & Beverage Brand",
        duration: "1 Week",
        description: "Complete packaging redesign with modern aesthetics and brand consistency"
    },
    {
        id: 2,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e90461f78729bcbfc33d64747b00f76a.png",
        title: "Brand Identity Design",
        category: "branding",
        client: "Healthcare Provider",
        duration: "2 Weeks",
        description: "Complete brand identity including logo, color palette, and brand guidelines"
    },
    {
        id: 3,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/5b4c9c60e3d498a17fe3300baf6df848.jpeg",
        title: "Website Redesign",
        category: "branding",
        client: "Consulting Firm",
        duration: "3 Weeks",
        description: "Modern website redesign with improved UX and conversion optimization"
    },
    {
        id: 4,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e9064aae2d9e883a5ccfd07c8c05e0d7.jpeg",
        title: "Corporate Branding",
        category: "branding",
        client: "Tech Startup",
        duration: "2 Weeks",
        description: "Complete corporate identity system with brand guidelines and marketing materials"
    },
    
    // Social Media Projects
    {
        id: 5,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/2b59c2df5fccb82a948e445272e7cdcb.jpeg",
        title: "Ladies Night Campaign",
        category: "social",
        client: "Restaurant Chain",
        duration: "2 Weeks",
        description: "Viral social media campaign with influencer collaborations and targeted ads"
    },
    {
        id: 6,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/5b4c9c60e3d498a17fe3300baf6df848.jpeg",
        title: "Social Media Strategy",
        category: "social",
        client: "E-commerce Brand",
        duration: "3 Weeks",
        description: "Comprehensive social media management with content calendar and engagement strategy"
    },
    {
        id: 7,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/f1e008baf4af82e2f80ecde89f80f360.jpeg",
        title: "Instagram Growth Campaign",
        category: "social",
        client: "Fashion Brand",
        duration: "2 Weeks",
        description: "Instagram growth strategy with influencer partnerships and user-generated content"
    },
    {
        id: 8,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/acbb2332457c6997c4275a417dfecf54.png",
        title: "Facebook Marketing",
        category: "social",
        client: "Local Business",
        duration: "1 Week",
        description: "Facebook marketing campaign with community engagement and lead generation"
    },
    
    // Content Creation Projects
    {
        id: 9,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/f1e008baf4af82e2f80ecde89f80f360.jpeg",
        title: "Product Photography",
        category: "content",
        client: "Fashion Brand",
        duration: "1 Week",
        description: "Professional product photography with lifestyle shots and marketing materials"
    },
    {
        id: 10,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e9064aae2d9e883a5ccfd07c8c05e0d7.jpeg",
        title: "Video Content Creation",
        category: "content",
        client: "Education Platform",
        duration: "1 Week",
        description: "Educational video series with animations and engaging storytelling"
    },
    {
        id: 11,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/2b59c2df5fccb82a948e445272e7cdcb.jpeg",
        title: "Blog Content Strategy",
        category: "content",
        client: "B2B Company",
        duration: "2 Weeks",
        description: "Comprehensive blog content strategy with SEO optimization and lead magnets"
    },
    {
        id: 12,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/5b4c9c60e3d498a17fe3300baf6df848.jpeg",
        title: "Email Marketing Content",
        category: "content",
        client: "E-commerce Store",
        duration: "1 Week",
        description: "Email marketing content creation with automation sequences and conversion optimization"
    },
    
    // Performance Marketing Projects
    {
        id: 13,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/acbb2332457c6997c4275a417dfecf54.png",
        title: "Multi-Device Connection",
        category: "performance",
        client: "Tech Startup",
        duration: "2 Weeks",
        description: "Cross-platform marketing campaign with retargeting and conversion optimization"
    },
    {
        id: 14,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/2b59c2df5fccb82a948e445272e7cdcb.jpeg",
        title: "PPC Campaign Management",
        category: "performance",
        client: "Real Estate Agency",
        duration: "2 Weeks",
        description: "Google Ads and Facebook Ads campaigns with lead generation focus"
    },
    {
        id: 15,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/e90461f78729bcbfc33d64747b00f76a.png",
        title: "Google Ads Optimization",
        category: "performance",
        client: "E-commerce Brand",
        duration: "1 Week",
        description: "Google Ads account optimization with improved ROI and conversion tracking"
    },
    {
        id: 16,
        image: "https://static.readdy.ai/image/45f5a755c5aaf69b77bf8ac7ff2528de/f1e008baf4af82e2f80ecde89f80f360.jpeg",
        title: "Retargeting Campaign",
        category: "performance",
        client: "Online Store",
        duration: "2 Weeks",
        description: "Advanced retargeting campaigns with dynamic ads and personalized messaging"
    },
    
    // Influencer Marketing Projects with Reels (1080x1920 Portrait)
    {
        id: 17,
        type: "reel",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title: "Fashion Influencer Campaign",
        category: "influencer",
        client: "Fashion Brand",
        duration: "2 Weeks",
        description: "Collaboration with top fashion influencers for brand awareness and sales"
    },
    {
        id: 18,
        type: "reel",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title: "Food & Lifestyle Reels",
        category: "influencer",
        client: "Restaurant Chain",
        duration: "1 Week",
        description: "Engaging food reels with lifestyle influencers driving foot traffic"
    },
    {
        id: 19,
        type: "reel",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title: "Beauty Product Launch",
        category: "influencer",
        client: "Beauty Brand",
        duration: "3 Weeks",
        description: "Multi-platform influencer campaign for new product launch"
    },
    {
        id: 20,
        type: "reel",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title: "Tech Gadget Reviews",
        category: "influencer",
        client: "Tech Company",
        duration: "2 Weeks",
        description: "Tech influencer reviews and demonstrations for product credibility"
    },
    {
        id: 21,
        type: "reel",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title: "Travel Influencer Partnership",
        category: "influencer",
        client: "Travel Agency",
        duration: "2 Weeks",
        description: "Travel influencer showcasing destinations and experiences"
    },
    {
        id: 22,
        type: "reel",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title: "Fitness Influencer Campaign",
        category: "influencer",
        client: "Fitness Brand",
        duration: "1 Week",
        description: "Fitness influencer promoting workout routines and products"
    }
];

// Portfolio Functions
function createPortfolioItem(item) {
    if (item.type === "reel") {
        return `
            <div class="portfolio-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl" data-category="${item.category}">
                <video 
                    src="${item.video}"
                    class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    preload="metadata"
                    style="aspect-ratio: 9/16; max-width: 1080px; max-height: 1920px;">
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                        <p class="text-sm text-gray-300 mb-3">${item.client}</p>
                        <p class="text-sm mb-4">${item.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="bg-primary/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                ${item.duration}
                            </span>
                            <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                                ${item.category}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    <i class="ri-play-circle-line mr-1"></i>Reel
                </div>
                <div class="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    <i class="ri-time-line mr-1"></i>5s
                </div>
            </div>
        `;
    } else if (item.type === "video") {
        return `
            <div class="portfolio-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl" data-category="${item.category}">
                <video 
                    src="${item.video}"
                    class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    preload="metadata">
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                        <p class="text-sm text-gray-300 mb-3">${item.client}</p>
                        <p class="text-sm mb-4">${item.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="bg-primary/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                ${item.duration}
                            </span>
                            <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                                ${item.category}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    <i class="ri-play-circle-line mr-1"></i>Video
                </div>
            </div>
        `;
    } else {
        return `
            <div class="portfolio-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl" data-category="${item.category}">
                <img src="${item.image}"
                     alt="${item.title}"
                     class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                        <p class="text-sm text-gray-300 mb-3">${item.client}</p>
                        <p class="text-sm mb-4">${item.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="bg-primary/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                ${item.duration}
                            </span>
                            <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                                ${item.category}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadPortfolioItems(filter = 'all') {
    const container = document.getElementById('portfolioGrid');
    container.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);
    
    // Add a message if no items found
    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="ri-search-line text-primary text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
                <p class="text-gray-600">We're working on more ${filter} projects. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    // Special layout for influencer marketing (portrait reels)
    if (filter === 'influencer') {
        container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    } else {
        container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    }
    
    filteredItems.forEach(item => {
        container.innerHTML += createPortfolioItem(item);
    });
    
    // Add loading animation to new items
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('fade-in-up');
        });
    }, 50);
}

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-white', 'text-primary', 'shadow-lg', 'hover:shadow-xl', 'transform', 'hover:-translate-y-1');
                btn.classList.add('bg-white/20', 'text-white', 'backdrop-blur-sm');
            });
            
            // Add active class to clicked button
            button.classList.add('active', 'bg-white', 'text-primary', 'shadow-lg', 'hover:shadow-xl', 'transform', 'hover:-translate-y-1');
            button.classList.remove('bg-white/20', 'text-white', 'backdrop-blur-sm');
            
            // Filter portfolio items
            const filter = button.getAttribute('data-filter');
            loadPortfolioItems(filter);
            
            // Re-initialize animations for filtered items
            setTimeout(() => {
                animateOnScroll();
            }, 100);
        });
    });
}

// Animation functions
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.portfolio-item').forEach(el => observer.observe(el));
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const logo = document.querySelector('.flex-shrink-0 img');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        if(!mobileMenu.classList.contains('hidden')) {
            // Menu is open - show close icon
            menuIcon.classList.add('opacity-0', 'rotate-90');
            closeIcon.classList.remove('opacity-0', 'rotate-90');
            logo.classList.add('h-12');
        } else {
            // Menu is closed - show menu icon
            menuIcon.classList.remove('opacity-0', 'rotate-90');
            closeIcon.classList.add('opacity-0', 'rotate-90');
            logo.classList.remove('h-12');
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
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
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    // Initialize portfolio
    loadPortfolioItems();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    animateOnScroll();
    
    // Add loading animation
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('fade-in-up');
        });
    }, 100);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .portfolio-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .portfolio-item.fade-in-up {
        opacity: 1;
        transform: translateY(0);
    }
    
    .filter-btn {
        transition: all 0.3s ease;
        border: none;
    }
    
    .filter-btn:hover {
        transform: translateY(-2px);
    }
    
    .filter-btn.active {
        box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
    }
    
    /* Desktop chip-style filter buttons */
    @media (min-width: 640px) {
        .filter-btn {
            backdrop-filter: blur(10px);
            border: none;
        }
        
        .filter-btn:hover {
            backdrop-filter: blur(15px);
        }
        
        .filter-btn.active {
            backdrop-filter: blur(20px);
        }
    }
    
    /* Reel specific styles */
    .portfolio-item[data-category="influencer"] video {
        aspect-ratio: 9/16;
        object-fit: cover;
        width: 100%;
        height: auto;
        max-height: 600px;
    }
    
    /* Responsive adjustments for reels */
    @media (max-width: 768px) {
        .portfolio-item[data-category="influencer"] video {
            max-height: 400px;
        }
    }
    
    @media (min-width: 1024px) {
        .portfolio-item[data-category="influencer"] video {
            max-height: 500px;
        }
    }
    
    @media (min-width: 1280px) {
        .portfolio-item[data-category="influencer"] video {
            max-height: 600px;
        }
    }
`;
document.head.appendChild(style);

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