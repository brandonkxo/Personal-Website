// Remove all SPIN animation preload code
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    let ticking = false;

    var contentSections = document.querySelectorAll('.content-container > section');
    var previousHeight = 0;

    contentSections.forEach(function(section) {
        section.style.top = previousHeight + 'px';
        previousHeight += section.offsetHeight;
    });

    // Add staggered animations for experience items
    const experienceItems = document.querySelectorAll('.content3 .company, .content3 .role, .content3 .year');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.06}s`;
    });

    // Add staggered animations for project grid items
    const projectItems = document.querySelectorAll('.content5 .grid-item');
    projectItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Add staggered animations for writing items
    const writingItems = document.querySelectorAll('.content6 .writparent');
    writingItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });

    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '50px'
    });

    // Observe elements
    document.querySelectorAll('.introabt, .featured-projects, .content3 hr, .company, .role, .year, .grid-item, .writparent').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const blurOverlay = document.querySelector('.blur-overlay');
        
        if (blurOverlay) {
            const opacity = Math.min(scrollPosition / 100, 1);
            blurOverlay.style.opacity = opacity;
        }
    });

    // Typing animation
    const typedTextSpan = document.getElementById("typed");
    const textArray = ["an Engineer", "a Maker", "a Life Enjoyer"];
    const typingDelay = 50;
    const erasingDelay = 30;
    const newTextDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;
    let isTyping = false;

    // Create and style the cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.style.display = 'inline-block';
    cursor.style.width = '2px';
    cursor.style.height = '1em';
    cursor.style.backgroundColor = 'currentColor';
    cursor.style.animation = 'blink 0.7s infinite';

    function updateText() {
        typedTextSpan.innerHTML = textArray[textArrayIndex].substring(0, charIndex) + '<span class="typing-cursor"></span>';
    }

    function type() {
        if (!isTyping) {
            isTyping = true;
            if (charIndex < textArray[textArrayIndex].length) {
                charIndex++;
                updateText();
                setTimeout(() => {
                    isTyping = false;
                    type();
                }, typingDelay);
            } else {
                isTyping = false;
                setTimeout(erase, newTextDelay);
            }
        }
    }

    function erase() {
        if (charIndex > 0) {
            charIndex--;
            updateText();
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    if (typedTextSpan) {
        updateText();
        setTimeout(type, newTextDelay + 250);
    }

    // Add video element for spin animation
    const spinElement = document.getElementById('spin-animation');
    if (spinElement) {
        spinElement.innerHTML = `
            <video 
                autoplay 
                loop 
                muted 
                playsinline 
                style="width: 100%; height: 100%; object-fit: contain;"
            >
                <source src="assets/images/index/spin_transparent.webm" type="video/webm">
            </video>
        `;
    }
});

var supportsCssVars = function() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");

function togglemenu() {
    var element = document.body;
    element.classList.toggle("toggle");
    element.classList.add("scrollUp");
}

function leftrevon() {
    var element = document.querySelector('.circleGroup');
    element.style.setProperty('--rotation-direction', 'normal');
}

function leftrevoff() {
    var element = document.querySelector('.circleGroup');
    element.style.setProperty('--rotation-direction', 'reverse');
}

leftrevon();

document.querySelector('.abtbtn').addEventListener('mouseenter', leftrevoff);
document.querySelector('.abtbtn').addEventListener('mouseleave', leftrevon);