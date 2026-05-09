---
hide:
  - navigation
  - toc
  - feedback
template: index.html
search:
  exclude: true
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <meta name="title" content="Writings - Brandon King">
  <meta name="description" content="My Life's Diary">
  <meta name="keywords" content="Engineering essays, Technical writing, Philosophy analysis, Neuroscience writing, Personal development, Engineering blog, Technical analysis, Engineering philosophy, Learning experiences, Engineering insights, Personal growth, Technical documentation, Engineering perspective, Design thinking, Innovation writing">
  <meta name="author" content="Brandon King">
  <meta name="robots" content="noindex, nofollow">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="/writ/">
  <meta property="og:title" content="Writings - Brandon King">
  <meta property="og:description" content="A conglomerate of my thoughts and essays.">
  <meta property="og:image" content="">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="/writ/">
  <meta property="twitter:title" content="Writings - Brandon King">
  <meta property="twitter:description" content="A conglomerate of my thoughts and essays.">
  <meta property="twitter:image" content="">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/proj.css">
  <link rel="stylesheet" href="/assets/css/header.css">
  <style>
    /* Password Modal Styles */
    .password-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.98);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(20px);
    }

    .password-modal {
      background: white;
      padding: 48px;
      border-radius: 24px;
      box-shadow: 0 4px 60px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
      width: 90%;
      border: 1px solid rgba(0, 0, 0, 0.08);
    }

    .password-modal h2 {
      font-family: 'Crimson Pro', serif;
      font-size: 1.8em;
      font-weight: 400;
      margin-bottom: 8px;
      color: #1a1a1a;
    }

    .password-modal p {
      font-family: 'Crimson Pro', serif;
      font-size: 1em;
      color: rgba(0, 0, 0, 0.55);
      margin-bottom: 32px;
    }

    .password-input {
      width: 100%;
      padding: 16px 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 1em;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      box-sizing: border-box;
    }

    .password-input:focus {
      border-color: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
    }

    .password-input.error {
      border-color: #e74c3c;
      animation: shake 0.5s ease;
    }

    .password-submit {
      width: 100%;
      padding: 16px 20px;
      margin-top: 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.95em;
      background: #1a1a1a;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.1s ease;
    }

    .password-submit:hover {
      background: #333;
    }

    .password-submit:active {
      transform: scale(0.98);
    }

    .error-message {
      color: #e74c3c;
      font-family: 'Crimson Pro', serif;
      font-size: 0.9em;
      margin-top: 12px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .error-message.visible {
      opacity: 1;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-8px); }
      40%, 80% { transform: translateX(8px); }
    }

    .content-hidden {
      display: none !important;
    }

    .lock-icon {
      font-size: 2.5em;
      margin-bottom: 16px;
      opacity: 0.7;
    }

    /* Custom writing card - fresh layout */
    .writing-card {
      display: flex;
      gap: 2em;
      align-items: flex-start;
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease;
    }

    .writing-card:hover {
      transform: scale(0.98);
    }

    .writing-card-image {
      width: 378px;
      height: 248px;
      border: 1px solid #000;
      border-radius: 24px;
      overflow: hidden;
      flex-shrink: 0;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .writing-card-image img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .writing-card-content {
      display: flex;
      flex-direction: column;
      padding-top: 1em;
    }

    .writing-card-title {
      font-family: "JetBrains Mono", monospace;
      font-size: 1.2em;
      font-weight: 300;
      color: var(--md-default-fg-color);
      opacity: 0.75;
      margin: 0 0 0.5em 0;
    }

    .writing-card-year {
      font-family: "JetBrains Mono", monospace;
      font-size: 1em;
      font-weight: 300;
      color: var(--md-default-fg-color);
      opacity: 0.38;
      margin: 0 0 0.5em 0;
    }


    @media (max-width: 768px) {
      .writing-card {
        flex-direction: column;
        gap: 1em;
      }

      .writing-card-image {
        width: 100%;
        height: 250px;
      }

      .writing-card-content {
        padding-top: 0;
      }
    }

    /* Hide overlay immediately if authenticated - prevents flash */
    .password-overlay.auth-hidden {
      display: none !important;
    }
  </style>
  <script>
    // Immediately check auth before render to prevent flash
    (function() {
      if (sessionStorage.getItem('writings_authenticated') === 'true') {
        document.write('<style>.password-overlay { display: none !important; } .content-hidden { display: block !important; }</style>');
      }
    })();
  </script>
</head>

<!-- Password Protection Overlay -->
<div class="password-overlay" id="passwordOverlay">
  <div class="password-modal">
    <div class="lock-icon"><i class="fa-solid fa-lock"></i></div>
    <h2>Protected Content</h2>
    <p>Enter the password to access writings</p>
    <form id="passwordForm" onsubmit="checkPassword(event); return false;">
      <input type="password" class="password-input" id="passwordInput" placeholder="Enter password" autocomplete="off" autofocus>
      <button type="submit" class="password-submit">Unlock</button>
    </form>
    <p class="error-message" id="errorMessage">Incorrect password. Please try again.</p>
  </div>
</div>

<nav class="main-navigation">
  <ul>
    <li><a class="home" href="/"><span class="navnum">01</span> Home</a></li>
    <li><a class="proj" href="/proj/"><span class="navnum">02</span> Projects</a></li>
    <li><a class="proj" href="/writ/"><span class="navnum">03</span> Writings</a></li>
  </ul>
</nav>

<div class="blur-overlay"></div>

<body>
  <main data-scroll-container id="mainContent" class="content-hidden">
  <div class="content-container">
    <section class="intro-section">
      <div class="content1">
        <div class="introabt">
          <h2>My Life's Diary</h2>
          <h3></h3>
        </div>
      </div>
    </section>
    <section class="writing">
      <div class="content6" id="content6">
        <a href="/Writings/IndustryPrimeForDisruption/" class="writing-card">
          <div class="writing-card-image">
            <img src="/assets/images/Writings/MedicalCrest.jpg" alt="An Industry Prime for Disruption">
          </div>
          <div class="writing-card-content">
            <p class="writing-card-title">An Industry Prime for Disruption</p>
            <p class="writing-card-year">Spring 2026</p>
          </div>
        </a>
      </div>
    </section>
    <h1 style="display:none;">Writing Portfolio - Engineering Essays & Technical Documentation</h1>
  </div>
  </main>
  <script>
    // Password protection script
    // Hash of the password (SHA-256)
    const PASSWORD_HASH = '44a76c2b03b8326bd17c884993b4db9ac7b6d8030659bb0df4bdda792662d8ae';
    const STORAGE_KEY = 'writings_authenticated';

    // Simple hash function
    async function hashPassword(password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function checkPassword(event) {
      event.preventDefault();
      const input = document.getElementById('passwordInput');
      const errorMessage = document.getElementById('errorMessage');
      const overlay = document.getElementById('passwordOverlay');
      const mainContent = document.getElementById('mainContent');

      const inputHash = await hashPassword(input.value);
      if (inputHash === PASSWORD_HASH) {
        // Store authentication in session
        sessionStorage.setItem(STORAGE_KEY, 'true');
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          overlay.style.display = 'none';
          mainContent.classList.remove('content-hidden');
        }, 300);
      } else {
        input.classList.add('error');
        errorMessage.classList.add('visible');
        setTimeout(() => {
          input.classList.remove('error');
        }, 500);
      }
      return false;
    }

    // Check if already authenticated this session
    document.addEventListener('DOMContentLoaded', function() {
      const overlay = document.getElementById('passwordOverlay');
      const mainContent = document.getElementById('mainContent');

      if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        overlay.style.display = 'none';
        mainContent.classList.remove('content-hidden');
      }

      // Focus password input
      document.getElementById('passwordInput').focus();
    });
  </script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const elements = ['content1', 'content6'];
      const observer = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const height = entry.contentRect.height;
          document.documentElement.style.setProperty(`--${id}-height`, `${height}px`);
        });
      });
      elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    });
  </script>
  <script src="/assets/js/proj.js"></script>
  <script src="/assets/js/header.js"></script>
</body>
</html>
