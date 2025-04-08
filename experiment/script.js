const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const heroTitle = document.getElementById('hero-title');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const limit = 200; // cât de repede dispare
  const opacity = Math.max(0, 1 - scrollY / limit);
  const translateY = Math.min(scrollY / 3, 100); // mișcare ușoară în sus

  heroTitle.style.opacity = opacity;
  heroTitle.style.transform = `translateY(-${translateY}px)`;
});
