// Select the hamburger and nav-links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle nav menu on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close nav menu if user clicks outside
document.addEventListener('click', (e) => {
  if (
    !hamburger.contains(e.target) && 
    !navLinks.contains(e.target) &&
    navLinks.classList.contains('show')
  ) {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
  }
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryLinks = document.querySelectorAll('.lightbox-link');

galleryLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lightbox.style.display = 'flex';
    lightboxImg.src = link.href;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

