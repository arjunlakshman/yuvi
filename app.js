/*
==========================================
PORTFOLIO PERSONALIZATION GUIDE
==========================================

This file contains all the data for your portfolio website. 
To customize it with your own information and photos:

1. PERSONAL INFORMATION:
   - Update the personalInfo section with your details
   - Replace profile image URL with your photo

2. ADDING PHOTOS:
   - Upload images to hosting service (ImgBB, Cloudinary, Imgur)
   - Get direct image URLs
   - Replace URLs in the projects arrays below
   - Update titles, descriptions, and metadata

3. IMAGE SIZE REQUIREMENTS:
   - Thumbnails: 400x300px
   - Full images: 1200x800px  
   - Profile: 400x400px (square)

4. SUPPORTED FORMATS: JPG, PNG, WEBP

5. HOW TO GET IMAGE URLS:
   - Upload to ImgBB.com (no account needed)
   - Right-click uploaded image > "Copy image address"
   - Paste URL in the "image" field below

Look for "CUSTOMIZE:" comments throughout this file for specific areas to modify.
*/

// CUSTOMIZE: Update this section with your personal information
const personalInfo = {
  name: "Alex Thompson",
  title: "Creative Visual Artist", 
  subtitle: "Capturing stories through photography, 3D art, and film",
  bio: "I'm a passionate visual artist with 8+ years of experience in photography, 3D modeling, and filmmaking. I love creating compelling visual narratives that connect with audiences.",
  location: "Los Angeles, CA",
  email: "alex@example.com", // CUSTOMIZE: Your email
  phone: "+1 (555) 123-4567", // CUSTOMIZE: Your phone
  website: "www.alexthompson.com", // CUSTOMIZE: Your website
  // CUSTOMIZE: Replace with your profile photo URL (400x400px recommended)
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80",
  // CUSTOMIZE: Update social media links
  socialMedia: [
    {"platform": "Instagram", "url": "https://instagram.com/alexthompson", "icon": "📷"},
    {"platform": "LinkedIn", "url": "https://linkedin.com/in/alexthompson", "icon": "💼"},
    {"platform": "Vimeo", "url": "https://vimeo.com/alexthompson", "icon": "🎥"}
  ]
};

// Portfolio data structure
const portfolioData = {
  "siteInfo": {
    // CUSTOMIZE: Update site information
    "title": "Alex Thompson - Creative Visual Artist",
    "tagline": "Photography • 3D Art • Film",
    "description": "Professional portfolio showcasing creative work across photography, 3D art, and filmmaking",
    "keywords": ["photography", "3D art", "filmmaking", "creative", "visual artist", "portfolio"],
    "author": "Alex Thompson", // CUSTOMIZE: Your name
    "url": "https://alexthompson.com" // CUSTOMIZE: Your domain
  },
  
  "navigation": [
    {"id": "home", "label": "Home", "icon": "🏠"},
    {"id": "photography", "label": "Photography", "icon": "📸"},
    {"id": "3d-art", "label": "3D Art", "icon": "🎭"},
    {"id": "film", "label": "Film", "icon": "🎬"},
    {"id": "about", "label": "About", "icon": "👤"},
    {"id": "contact", "label": "Contact", "icon": "✉️"}
  ],
  
  "hero": {
    // CUSTOMIZE: Update hero section content
    "title": "Creative Visual Artist",
    "subtitle": "Transforming ideas into stunning visual narratives",
    "description": "I specialize in capturing moments, crafting digital worlds, and telling stories through the lens of creativity.",
    // CUSTOMIZE: Update these statistics to reflect your achievements
    "stats": [
      {"number": "500+", "label": "Projects Completed"},
      {"number": "50+", "label": "Happy Clients"},
      {"number": "8+", "label": "Years Experience"},
      {"number": "25+", "label": "Awards Won"}
    ],
    "cta": {
      "primary": "View My Work",
      "secondary": "Get In Touch"
    }
  },
  
  "portfolioSections": {
    /*
    ==========================================
    PHOTOGRAPHY SECTION
    ==========================================
    
    TO ADD YOUR PHOTOS:
    1. Upload photos to ImgBB.com, Cloudinary.com, or Imgur.com
    2. Get the direct image URL
    3. Replace the "image" URL in each project below
    4. Update title, description, category, location, camera, lens, date, and tags
    5. Set "featured": true for your best work
    
    CATEGORIES AVAILABLE:
    - Portrait, Landscape, Street, Nature, Commercial, Wedding
    
    EXAMPLE PROJECT STRUCTURE:
    {
      "id": 1,
      "title": "Your Photo Title",
      "description": "Describe your photo and the story behind it",
      "image": "https://your-hosting-service.com/your-image.jpg",
      "category": "Portrait",
      "location": "Where it was taken",
      "camera": "Camera model used",
      "lens": "Lens information",
      "date": "2024-01-01",
      "tags": ["tag1", "tag2", "tag3"],
      "featured": true
    }
    */
    
    "photography": {
      "title": "Photography",
      "description": "Capturing life's most precious moments through expert composition and lighting",
      "categories": ["All", "Portrait", "Landscape", "Street", "Nature", "Commercial", "Wedding"],
      
      // CUSTOMIZE: Replace these projects with your own photography work
      "projects": [
        {
          "id": 1,
          "title": "Golden Hour Portraits", // CUSTOMIZE: Your photo title
          "description": "Professional portrait series captured during the magical golden hour, emphasizing natural beauty and authentic emotions.", // CUSTOMIZE: Your photo description
          "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Replace with your image URL
          "category": "Portrait", // CUSTOMIZE: Choose from available categories
          "location": "California Coast", // CUSTOMIZE: Where you took the photo
          "camera": "Canon EOS R5", // CUSTOMIZE: Your camera
          "lens": "85mm f/1.4", // CUSTOMIZE: Your lens
          "date": "2024-08-15", // CUSTOMIZE: Date taken
          "tags": ["natural light", "outdoor", "professional"], // CUSTOMIZE: Relevant tags
          "featured": true // CUSTOMIZE: Set to true for featured work
        },
        {
          "id": 2,
          "title": "Urban Architecture", // CUSTOMIZE: Your photo title
          "description": "Modern cityscapes showcasing the interplay between light, shadow, and geometric forms in urban environments.", // CUSTOMIZE: Your photo description  
          "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Replace with your image URL
          "category": "Landscape", // CUSTOMIZE: Choose category
          "location": "New York City", // CUSTOMIZE: Location
          "camera": "Sony A7R IV", // CUSTOMIZE: Camera
          "lens": "16-35mm f/2.8", // CUSTOMIZE: Lens
          "date": "2024-07-22", // CUSTOMIZE: Date
          "tags": ["architecture", "cityscape", "blue hour"], // CUSTOMIZE: Tags
          "featured": false
        },
        {
          "id": 3,
          "title": "Street Life Chronicles", // CUSTOMIZE: Title
          "description": "Candid moments of everyday life captured in bustling city streets, telling stories of human connection and urban culture.", // CUSTOMIZE: Description
          "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Image URL
          "category": "Street",
          "location": "Tokyo, Japan",
          "camera": "Fujifilm X-T4",
          "lens": "35mm f/1.4",
          "date": "2024-06-10",
          "tags": ["street photography", "candid", "culture"],
          "featured": true
        },
        {
          "id": 4,
          "title": "Mountain Wilderness", // CUSTOMIZE: Title
          "description": "Breathtaking landscapes of untouched wilderness areas, capturing the raw beauty and majesty of nature.", // CUSTOMIZE: Description
          "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Image URL
          "category": "Nature",
          "location": "Rocky Mountains",
          "camera": "Canon EOS R6",
          "lens": "24-70mm f/2.8",
          "date": "2024-09-05",
          "tags": ["landscape", "mountains", "wilderness"],
          "featured": false
        },
        {
          "id": 5,
          "title": "Corporate Excellence", // CUSTOMIZE: Title
          "description": "Professional headshots and corporate photography that captures the essence of business leadership and professionalism.", // CUSTOMIZE: Description
          "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Image URL
          "category": "Commercial",
          "location": "Los Angeles",
          "camera": "Canon EOS 5D IV",
          "lens": "85mm f/1.2",
          "date": "2024-08-28",
          "tags": ["corporate", "professional", "business"],
          "featured": false
        },
        {
          "id": 6,
          "title": "Eternal Love Stories", // CUSTOMIZE: Title
          "description": "Wedding photography that captures the romance, emotion, and beauty of couples' most important day.", // CUSTOMIZE: Description
          "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Image URL
          "category": "Wedding",
          "location": "Napa Valley",
          "camera": "Sony A7 III",
          "lens": "50mm f/1.4",
          "date": "2024-07-14",
          "tags": ["wedding", "romance", "celebration"],
          "featured": true
        }
        
        // CUSTOMIZE: Add more photography projects here following the same structure
        // Copy the structure above and replace with your own images and details
      ]
    },
    
    /*
    ==========================================
    3D ART SECTION
    ==========================================
    
    TO ADD YOUR 3D WORK:
    - Same process as photography
    - Include software, render engine, poly count, and resolution details
    - Categories: Character Design, Environment, Product Viz, Architecture, Abstract
    */
    
    "3d-art": {
      "title": "3D Art & Design",
      "description": "Digital sculptures and immersive environments created with cutting-edge 3D technology",
      "categories": ["All", "Character Design", "Environment", "Product Viz", "Architecture", "Abstract"],
      
      // CUSTOMIZE: Replace with your 3D art projects
      "projects": [
        {
          "id": 1,
          "title": "Cyberpunk Warrior", // CUSTOMIZE: Your 3D project title
          "description": "Futuristic character design featuring detailed armor, weaponry, and cybernetic enhancements for a sci-fi game project.", // CUSTOMIZE: Description
          "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Replace with your 3D render URL
          "category": "Character Design",
          "software": ["ZBrush", "Substance Painter", "Blender"], // CUSTOMIZE: Software used
          "renderEngine": "Cycles", // CUSTOMIZE: Render engine
          "polyCount": "150,000 tris", // CUSTOMIZE: Poly count or resolution
          "date": "2024-08-20",
          "tags": ["character", "sci-fi", "game art"],
          "featured": true
        },
        {
          "id": 2,
          "title": "Mystical Forest Realm",
          "description": "Enchanted forest environment with magical lighting, detailed vegetation, and atmospheric effects for fantasy visualization.",
          "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Environment",
          "software": ["Unreal Engine", "Blender", "World Machine"],
          "renderEngine": "Unreal Engine",
          "resolution": "4K",
          "date": "2024-07-18",
          "tags": ["environment", "fantasy", "nature"],
          "featured": false
        },
        {
          "id": 3,
          "title": "Luxury Watch Collection",
          "description": "Photorealistic product visualization showcasing premium timepieces with accurate materials and studio lighting.",
          "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Product Viz",
          "software": ["KeyShot", "Rhino", "Photoshop"],
          "renderEngine": "KeyShot",
          "resolution": "8K",
          "date": "2024-09-01",
          "tags": ["product", "luxury", "photorealistic"],
          "featured": true
        },
        {
          "id": 4,
          "title": "Modern Residential Villa",
          "description": "Contemporary architectural visualization featuring clean lines, natural materials, and integration with landscape design.",
          "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Architecture",
          "software": ["3ds Max", "V-Ray", "Photoshop"],
          "renderEngine": "V-Ray",
          "resolution": "6K",
          "date": "2024-06-25",
          "tags": ["architecture", "modern", "residential"],
          "featured": false
        },
        {
          "id": 5,
          "title": "Digital Metamorphosis",
          "description": "Abstract sculptural piece exploring the transformation of organic forms through digital manipulation and artistic interpretation.",
          "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Abstract",
          "software": ["Houdini", "Cinema 4D", "Octane"],
          "renderEngine": "Octane",
          "resolution": "4K",
          "date": "2024-08-05",
          "tags": ["abstract", "sculpture", "digital art"],
          "featured": true
        }
        
        // CUSTOMIZE: Add more 3D art projects here
      ]
    },
    
    /*
    ==========================================
    FILM SECTION
    ==========================================
    
    TO ADD YOUR FILMS:
    - Use thumbnail images for video projects
    - Include duration, role, client, and technical specifications
    - Categories: Short Film, Commercial, Music Video, Documentary, Corporate
    */
    
    "film": {
      "title": "Film & Video Production",
      "description": "Cinematic storytelling through compelling visual narratives and professional video production",
      "categories": ["All", "Short Film", "Commercial", "Music Video", "Documentary", "Corporate"],
      
      // CUSTOMIZE: Replace with your film/video projects
      "projects": [
        {
          "id": 1,
          "title": "Echoes of Tomorrow", // CUSTOMIZE: Your film title
          "description": "A contemplative short film exploring themes of memory, technology, and human connection in a near-future setting.", // CUSTOMIZE: Description
          "thumbnail": "https://images.unsplash.com/photo-1489599328109-d635ba2e0cfa?w=800&h=600&fit=crop&auto=format&q=80", // CUSTOMIZE: Thumbnail image URL
          "category": "Short Film",
          "duration": "15 minutes", // CUSTOMIZE: Duration
          "year": "2024", // CUSTOMIZE: Year
          "role": "Director, Cinematographer", // CUSTOMIZE: Your role
          "awards": ["Best Cinematography - Indie Film Festival 2024"], // CUSTOMIZE: Awards if any
          "vimeoId": "123456789", // CUSTOMIZE: Vimeo video ID if applicable
          "tags": ["sci-fi", "drama", "experimental"],
          "featured": true,
          "specs": { // CUSTOMIZE: Technical specifications
            "camera": "RED Komodo 6K",
            "lenses": "Sigma Cine Primes",
            "format": "6K RAW",
            "aspect": "2.35:1"
          }
        },
        {
          "id": 2,
          "title": "Nike Air Revolution",
          "description": "High-energy commercial showcasing athletic performance and product innovation through dynamic cinematography and editing.",
          "thumbnail": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Commercial",
          "duration": "60 seconds",
          "year": "2024",
          "role": "Director of Photography",
          "client": "Nike", // CUSTOMIZE: Client name
          "vimeoId": "234567890",
          "tags": ["sports", "commercial", "high-energy"],
          "featured": false,
          "specs": {
            "camera": "Sony FX9",
            "lenses": "Sony G Master",
            "format": "4K",
            "aspect": "16:9"
          }
        },
        {
          "id": 3,
          "title": "Neon Dreams - Synthwave",
          "description": "Retro-futuristic music video with vibrant neon aesthetics, capturing the essence of 80s nostalgia and modern electronic music.",
          "thumbnail": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Music Video",
          "duration": "4 minutes",
          "year": "2024",
          "role": "Director, Editor",
          "artist": "Electric Horizon", // CUSTOMIZE: Artist name
          "vimeoId": "345678901",
          "tags": ["synthwave", "neon", "retro"],
          "featured": true,
          "specs": {
            "camera": "Canon C70",
            "lenses": "Canon RF Series",
            "format": "4K RAW",
            "aspect": "16:9"
          }
        },
        {
          "id": 4,
          "title": "Voices of Change",
          "description": "Documentary exploring climate activism among young people, featuring intimate interviews and powerful environmental imagery.",
          "thumbnail": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Documentary",
          "duration": "30 minutes",
          "year": "2023",
          "role": "Producer, Cinematographer",
          "awards": ["Audience Choice - Environmental Film Festival"],
          "vimeoId": "456789012",
          "tags": ["documentary", "environmental", "activism"],
          "featured": false,
          "specs": {
            "camera": "Canon C300 Mark III",
            "lenses": "Canon Cine-Servo",
            "format": "4K",
            "aspect": "16:9"
          }
        },
        {
          "id": 5,
          "title": "Innovation Forward",
          "description": "Corporate video showcasing cutting-edge technology solutions and company culture for a leading tech startup.",
          "thumbnail": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&auto=format&q=80",
          "category": "Corporate",
          "duration": "3 minutes",
          "year": "2024",
          "role": "Creative Director",
          "client": "TechFlow Solutions",
          "vimeoId": "567890123",
          "tags": ["corporate", "technology", "startup"],
          "featured": false,
          "specs": {
            "camera": "Sony FX6",
            "lenses": "Sony G Master",
            "format": "4K",
            "aspect": "16:9"
          }
        }
        
        // CUSTOMIZE: Add more film/video projects here
      ]
    }
  }
};

/*
==========================================
PHOTO UPLOAD STEP-BY-STEP GUIDE
==========================================

1. CHOOSE A FREE IMAGE HOSTING SERVICE:
   - ImgBB.com (No account needed, simple upload)
   - Cloudinary.com (25GB free with account)  
   - Imgur.com (Unlimited uploads)

2. PREPARE YOUR IMAGES:
   - Resize to recommended dimensions
   - Compress for web (JPG quality 80-90%)
   - Use descriptive filenames

3. UPLOAD PROCESS:
   a) Go to your chosen hosting service
   b) Upload your image file
   c) Right-click the uploaded image
   d) Select "Copy image address" or "Copy image URL"
   e) This gives you the direct link to your image

4. UPDATE THE CODE:
   a) Find the project you want to update in the arrays above
   b) Replace the "image" URL with your new URL
   c) Update title, description, and other details
   d) Save the file and refresh your website

5. EXAMPLE URL FORMATS:
   - ImgBB: https://i.ibb.co/xxxxxxx/image.jpg
   - Cloudinary: https://res.cloudinary.com/username/image/upload/v123456/image.jpg
   - Imgur: https://i.imgur.com/xxxxxxx.jpg

6. TESTING:
   - Always test image URLs in a new browser tab first
   - Make sure the URL loads the image directly
   - Check that images display correctly on your site
*/

// Global state variables
let currentModalProject = null;
let currentModalSection = null;
let currentModalIndex = 0;
let filteredProjects = [];
let sectionProjects = {};
let touchStartY = 0;
let touchEndY = 0;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading overlay after a short delay
    setTimeout(() => {
        document.getElementById('loading-overlay').classList.add('hidden');
    }, 1000);

    // Initialize all components
    initializeParticles();
    initializeNavigation();
    initializeScrollProgress();
    initializeCounters();
    initializePortfolioSections();
    initializeModal();
    initializeContactForm();
    initializeIntersectionObserver();
    initializeMobileMenu();
    initializeHeroCTA();
    initializeSkillBars();
});

// Create particle background animation
function initializeParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = window.innerWidth < 768 ? 30 : 60;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const offsetTop = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active state
                updateActiveNavLink(link);
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const hamburger = document.getElementById('hamburger');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavOnScroll();
    });
}

// Update active navigation link based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === current) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Scroll progress indicator
function initializeScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Counter animations for stats
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + '+';
            setTimeout(updateCounter, 20);
        } else {
            counter.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Initialize all portfolio sections
function initializePortfolioSections() {
    initializePhotographySection();
    initialize3DArtSection();
    initializeFilmSection();
}

function initializePhotographySection() {
    const section = 'photography';
    const projects = portfolioData.portfolioSections[section].projects;
    const grid = document.getElementById('photography-grid');
    const searchInput = document.getElementById('photo-search');
    const filterBtns = document.querySelectorAll('#photography .filter-btn');
    const loadMoreBtn = document.getElementById('photo-load-more');
    
    sectionProjects[section] = projects;
    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 6;
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter').toLowerCase();
            currentPage = 1;
            renderProjects(section, currentFilter, searchInput.value, currentPage, true);
        });
    });
    
    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentPage = 1;
            renderProjects(section, currentFilter, searchInput.value, currentPage, true);
        }, 300);
    });
    
    // Load more functionality
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderProjects(section, currentFilter, searchInput.value, currentPage, false);
    });
    
    // Initial render
    renderProjects(section, currentFilter, '', currentPage, true);
}

function initialize3DArtSection() {
    const section = '3d-art';
    const projects = portfolioData.portfolioSections[section].projects;
    const grid = document.getElementById('art-grid');
    const searchInput = document.getElementById('art-search');
    const filterBtns = document.querySelectorAll('#3d-art .filter-btn');
    const loadMoreBtn = document.getElementById('art-load-more');
    
    sectionProjects[section] = projects;
    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 6;
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter').toLowerCase();
            currentPage = 1;
            renderProjects(section, currentFilter, searchInput.value, currentPage, true);
        });
    });
    
    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentPage = 1;
            renderProjects(section, currentFilter, searchInput.value, currentPage, true);
        }, 300);
    });
    
    // Load more functionality
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderProjects(section, currentFilter, searchInput.value, currentPage, false);
    });
    
    // Initial render
    renderProjects(section, currentFilter, '', currentPage, true);
}

function initializeFilmSection() {
    const section = 'film';
    const projects = portfolioData.portfolioSections[section].projects;
    const grid = document.getElementById('film-grid');
    const searchInput = document.getElementById('film-search');
    const filterBtns = document.querySelectorAll('#film .filter-btn');
    const loadMoreBtn = document.getElementById('film-load-more');
    
    sectionProjects[section] = projects;
    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 6;
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter').toLowerCase();
            currentPage = 1;
            renderProjects(section, currentFilter, searchInput.value, currentPage, true);
        });
    });
    
    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentPage = 1;
            renderProjects(section, currentFilter, searchInput.value, currentPage, true);
        }, 300);
    });
    
    // Load more functionality
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderProjects(section, currentFilter, searchInput.value, currentPage, false);
    });
    
    // Initial render
    renderProjects(section, currentFilter, '', currentPage, true);
}

// Render projects with filtering and pagination
function renderProjects(section, filter, searchTerm, page, clearGrid) {
    const projects = sectionProjects[section];
    const grid = document.getElementById(section === 'photography' ? 'photography-grid' : 
                                      section === '3d-art' ? 'art-grid' : 'film-grid');
    const loadMoreBtn = document.getElementById(section === 'photography' ? 'photo-load-more' : 
                                             section === '3d-art' ? 'art-load-more' : 'film-load-more');
    
    // Filter projects
    let filtered = projects.filter(project => {
        const categoryMatch = filter === 'all' || 
                             project.category.toLowerCase().replace(/\s+/g, '-') === filter ||
                             project.category.toLowerCase() === filter;
        
        const searchMatch = searchTerm === '' || 
                           project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
        
        return categoryMatch && searchMatch;
    });
    
    // Store filtered projects for modal navigation
    filteredProjects = filtered;
    
    // Pagination
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = filtered.slice(startIndex, endIndex);
    
    // Clear grid if needed
    if (clearGrid) {
        grid.innerHTML = '';
    }
    
    // Add projects to grid
    paginatedProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, section, startIndex + index);
        grid.appendChild(projectCard);
        
        // Staggered animation
        setTimeout(() => {
            projectCard.classList.add('fadeIn');
        }, index * 100);
    });
    
    // Update load more button
    if (filtered.length <= page * itemsPerPage) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create individual project cards
function createProjectCard(project, section, index) {
    const card = document.createElement('div');
    card.className = 'project-card glass-card';
    card.style.opacity = '0';
    
    const imageUrl = section === 'film' ? project.thumbnail : project.image;
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${project.title}" class="project-image" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' viewBox=\\'0 0 800 600\\'%3E%3Crect width=\\'800\\' height=\\'600\\' fill=\\'%23f0f0f0\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' font-family=\\'Arial, sans-serif\\' font-size=\\'20\\' fill=\\'%23666\\'%3E${project.title}%3C/text%3E%3C/svg%3E'">
        <div class="project-overlay">
            <div class="project-info">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
        ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => {
        openModal(project, section, index);
    });
    
    return card;
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    
    // Close modal
    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    };
    
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    
    // Navigation
    modalPrev.addEventListener('click', () => navigateModal(-1));
    modalNext.addEventListener('click', () => navigateModal(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });
    
    // Touch navigation for mobile
    let startX = 0;
    modal.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    modal.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                navigateModal(1); // Swipe left - next
            } else {
                navigateModal(-1); // Swipe right - previous
            }
        }
    });
}

// Open modal with project details
function openModal(project, section, index) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    currentModalProject = project;
    currentModalSection = section;
    currentModalIndex = index;
    
    // Create modal content based on section
    let modalContent = '';
    
    if (section === 'photography') {
        modalContent = `
            <div class="modal-project">
                <img src="${project.image}" alt="${project.title}" class="modal-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'400\\' viewBox=\\'0 0 800 400\\'%3E%3Crect width=\\'800\\' height=\\'400\\' fill=\\'%23f0f0f0\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' font-family=\\'Arial, sans-serif\\' font-size=\\'20\\' fill=\\'%23666\\'%3E${project.title}%3C/text%3E%3C/svg%3E'">
                <div class="modal-info">
                    <div class="modal-category">${project.category}</div>
                    <h2 class="modal-title">${project.title}</h2>
                    <p class="modal-description">${project.description}</p>
                    
                    <div class="modal-details">
                        <div class="detail-item">
                            <strong>Location:</strong> ${project.location}
                        </div>
                        <div class="detail-item">
                            <strong>Camera:</strong> ${project.camera}
                        </div>
                        <div class="detail-item">
                            <strong>Lens:</strong> ${project.lens}
                        </div>
                        <div class="detail-item">
                            <strong>Date:</strong> ${new Date(project.date).toLocaleDateString()}
                        </div>
                    </div>
                    
                    <div class="modal-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    } else if (section === '3d-art') {
        modalContent = `
            <div class="modal-project">
                <img src="${project.image}" alt="${project.title}" class="modal-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'400\\' viewBox=\\'0 0 800 400\\'%3E%3Crect width=\\'800\\' height=\\'400\\' fill=\\'%23f0f0f0\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' font-family=\\'Arial, sans-serif\\' font-size=\\'20\\' fill=\\'%23666\\'%3E${project.title}%3C/text%3E%3C/svg%3E'">
                <div class="modal-info">
                    <div class="modal-category">${project.category}</div>
                    <h2 class="modal-title">${project.title}</h2>
                    <p class="modal-description">${project.description}</p>
                    
                    <div class="modal-details">
                        <div class="detail-item">
                            <strong>Software:</strong> ${project.software.join(', ')}
                        </div>
                        <div class="detail-item">
                            <strong>Render Engine:</strong> ${project.renderEngine}
                        </div>
                        <div class="detail-item">
                            <strong>Resolution:</strong> ${project.resolution || project.polyCount}
                        </div>
                        <div class="detail-item">
                            <strong>Date:</strong> ${new Date(project.date).toLocaleDateString()}
                        </div>
                    </div>
                    
                    <div class="modal-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    } else if (section === 'film') {
        modalContent = `
            <div class="modal-project">
                <img src="${project.thumbnail}" alt="${project.title}" class="modal-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'400\\' viewBox=\\'0 0 800 400\\'%3E%3Crect width=\\'800\\' height=\\'400\\' fill=\\'%23f0f0f0\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' font-family=\\'Arial, sans-serif\\' font-size=\\'20\\' fill=\\'%23666\\'%3E${project.title}%3C/text%3E%3C/svg%3E'">
                <div class="modal-info">
                    <div class="modal-category">${project.category}</div>
                    <h2 class="modal-title">${project.title}</h2>
                    <p class="modal-description">${project.description}</p>
                    
                    <div class="modal-details">
                        <div class="detail-item">
                            <strong>Duration:</strong> ${project.duration}
                        </div>
                        <div class="detail-item">
                            <strong>Year:</strong> ${project.year}
                        </div>
                        <div class="detail-item">
                            <strong>Role:</strong> ${project.role}
                        </div>
                        <div class="detail-item">
                            <strong>Camera:</strong> ${project.specs.camera}
                        </div>
                        ${project.client ? `<div class="detail-item"><strong>Client:</strong> ${project.client}</div>` : ''}
                        ${project.awards ? `<div class="detail-item"><strong>Awards:</strong> ${project.awards.join(', ')}</div>` : ''}
                    </div>
                    
                    <div class="modal-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = modalContent;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    
    if (newIndex >= 0 && newIndex < filteredProjects.length) {
        const project = filteredProjects[newIndex];
        openModal(project, currentModalSection, newIndex);
    }
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const formObject = {};
        
        for (let [key, value] of formData.entries()) {
            formObject[key] = value;
        }
        
        // Simulate form submission with proper feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.background = 'var(--color-warning)';
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.style.background = 'var(--color-success)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                form.reset();
            }, 3000);
        }, 1500);
    });
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
    const animatedElements = document.querySelectorAll('.glass-card, .section-title, .section-description');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Hero CTA functionality
function initializeHeroCTA() {
    const primaryCTA = document.querySelector('.cta-primary');
    const secondaryCTA = document.querySelector('.cta-secondary');
    
    primaryCTA.addEventListener('click', () => {
        const photographySection = document.getElementById('photography');
        const navbar = document.getElementById('navbar');
        const offsetTop = photographySection.offsetTop - navbar.offsetHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
    
    secondaryCTA.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        const navbar = document.getElementById('navbar');
        const offsetTop = contactSection.offsetTop - navbar.offsetHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 500);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Mouse parallax effect for floating cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});