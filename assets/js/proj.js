document.addEventListener("DOMContentLoaded", function () {
  // Animate project cards with stagger
  const projects = document.querySelectorAll('.writparent');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.15}s`;
  });

  // Animate social icons with stagger
  const socials = document.querySelectorAll('.socialpar');
  socials.forEach((social, index) => {
    social.style.animationDelay = `${(projects.length * 0.15) + (index * 0.1)}s`;
  });

  // Animate copyright with delay
  const copyright = document.querySelector('.copyright');
  if (copyright) {
    copyright.style.animationDelay = `${(projects.length * 0.15) + 0.3}s`;
  }

  // ✅ Clean nav close on link click
  const navLinks = document.querySelectorAll(".main-navigation a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetURL = this.href;

      document.body.classList.remove("toggle");
      document.documentElement.classList.remove("toggle");

      setTimeout(() => {
        window.location.href = targetURL;
      }, 350);
    });
  });
});

// CSS Variables Support Check
var supportsCssVars = function () {
  var e, t = document.createElement("style");
  t.innerHTML = "root: { --tmp-var: bold; }";
  document.head.appendChild(t);
  e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
  t.parentNode.removeChild(t);
  return e;
};
supportsCssVars() || alert("Please view this page in a modern browser that supports CSS Variables :).");

function setupPage() {
  // Close the nav menu if it's still open
  document.body.classList.remove("toggle");
  document.documentElement.classList.remove("toggle");

  // Rerun your animations (same logic as DOMContentLoaded)
  const projects = document.querySelectorAll('.writparent');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.15}s`;
  });

  const socials = document.querySelectorAll('.socialpar');
  socials.forEach((social, index) => {
    social.style.animationDelay = `${(projects.length * 0.15) + (index * 0.1)}s`;
  });

  const copyright = document.querySelector('.copyright');
  if (copyright) {
    copyright.style.animationDelay = `${(projects.length * 0.15) + 0.3}s`;
  }

  // If you were observing layout or setting heights, do it here too
}

// Trigger it on full page load
document.addEventListener("DOMContentLoaded", setupPage);

// ✅ Trigger it again after MkDocs Material does an instant nav
document.addEventListener("navigation:end", setupPage);
