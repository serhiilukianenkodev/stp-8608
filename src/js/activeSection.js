const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.header-nav-link');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.header-nav-link[href="#${id}"]`);

    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      link.classList.add('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
