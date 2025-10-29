document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = link.href;
      }, 200);
    });
  });
});
