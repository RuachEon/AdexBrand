// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach((section) => {
const sectionTop = section.offsetTop - 80;
if (pageYOffset >= sectionTop) {
current = section.getAttribute('id');
}
});

navItems.forEach((link) => {
link.classList.remove('active');
if (link.getAttribute('href').substring(1) === current) {
link.classList.add('active');
}
});
});

// Dynamic footer year
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('year').textContent = new Date().getFullYear();

// Carousel functionality with swipe support
const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach(carousel => {
const images = carousel.querySelectorAll('.carousel-img');
let index = 0;
let startX = 0;
let isDragging = false;

function showSlide(i) {
images.forEach((img, idx) => {
img.classList.remove('active');
if (idx === i) img.classList.add('active');
});
}

showSlide(index);

// Auto slide every 4 seconds
let interval = setInterval(() => {
index = (index + 1) % images.length;
showSlide(index);
}, 4000);

// Swipe support
carousel.addEventListener('touchstart', e => {
clearInterval(interval);
startX = e.touches[0].clientX;
isDragging = true;
});

carousel.addEventListener('touchmove', e => {
if (!isDragging) return;
const currentX = e.touches[0].clientX;
const diffX = currentX - startX;

if (Math.abs(diffX) > 50) {
if (diffX > 0) {
// Swipe right - previous slide
index = (index - 1 + images.length) % images.length;
} else {
// Swipe left - next slide
index = (index + 1) % images.length;
}
showSlide(index);
isDragging = false;
// Restart interval after swipe
interval = setInterval(() => {
index = (index + 1) % images.length;
showSlide(index);
}, 4000);
}
});

carousel.addEventListener('touchend', () => {

isDragging = false;
});
});
});
