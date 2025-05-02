export const initScrollAnimation = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
  // Observe all elements with the fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
};

export const getRandomDelay = () => {
  return `${Math.random() * 0.5}s`;
};