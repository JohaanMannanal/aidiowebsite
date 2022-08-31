document.querySelectorAll(".fade-in").forEach((el) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.classList.add("fade-in-visible");
        }, parseInt(el.dataset.delay) || 0);
      }
    });
  });
  observer.observe(el);
});