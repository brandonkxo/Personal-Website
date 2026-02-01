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
  <meta name="title" content="Writings - Teddy Warner">
  <meta name="description" content="A conglomerate of my thoughts and essays.">
  <meta name="keywords" content="Engineering essays, Technical writing, Philosophy analysis, Neuroscience writing, Personal development, Engineering blog, Technical analysis, Engineering philosophy, Learning experiences, Engineering insights, Personal growth, Technical documentation, Engineering perspective, Design thinking, Innovation writing">
  <meta name="author" content="Teddy Warner">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://teddywarner.org/writ/">
  <meta property="og:title" content="Writing - Teddy Warner">
  <meta property="og:description" content="Teddy Warner's Writing">
  <meta property="og:image" content="">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://teddywarner.org/writ/">
  <meta property="twitter:title" content="Writings - Teddy Warner">
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
</head>

  <nav class="main-navigation">
    <ul>
      <li><a class="home" href="/"><span class="navnum">01</span> Home</a></li>
      <li><a class="proj" href="/proj/"><span class="navnum">02</span> Projects</a></li>
    </ul>
  </nav>
  
  <div class="blur-overlay"></div>

<body>
  <main data-scroll-container>
  <div class="content-container">
    <section class="intro-section">
      <div class="content1">
        <div class="introabt">
          <h2>My Writings</h2>
          <h3>A conglomerate of thoughts and essays.</h3>
        </div>
      </div>
    </section>
    <section class="writing">
      <div class="content6" id="content6">
        <a href="/writ"><h2></h2></a>
        <div class="writparent">
          <a href="/writings/noregrets">
            <div class="imgparent"><img class="writeimg" src="../assets/images/force/force.png" alt="No regrets article image"></div>
            <p class="projtitle">No regrets</p>
            <p class="projdescription"></p>
            <p class="writeyear">2025</p>
          </a>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="content8">
        <div class="socialpar">
          <a target="_blank" href="https://github.com/brandonkxo">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="socialpar">
          <a target="_blank" href="https://x.com/brandonkxo">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <div class="socialpar">
          <a target="_blank" href="mailto:brandonwkingwi@gmail.com">
            <i class="fa-solid fa-paper-plane"></i>
          </a>
        </div>
        <a target="_blank" href="https://github.com/Twarner491/TeddyWarner.org/blob/main/LICENSE">
          <p class="copyright">Copyright © 2025 Brandon King</p>
        </a>
      </div>
    </section>
    <h1 style="display:none;">Writing Portfolio - Engineering Essays & Technical Documentation</h1>
  </div>
  </main>
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
