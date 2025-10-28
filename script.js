// Collapsible Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll Animation
const fadeEls = document.querySelectorAll('.fade-in');

// Function to reveal elements when visible in viewport
function revealVisibleElements() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Run once on page load (so hero or top sections appear immediately)
window.addEventListener('load', revealVisibleElements);

// Also run on scroll (for elements that appear later)
window.addEventListener('scroll', revealVisibleElements);

// Optional hover animation or console log for interactivity
document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Opening project:', link.href);
  });
});

