// Replace this with the Google Drive link to the latest CV.
const siteConfig = {
  cvUrl: "YOUR_GOOGLE_DRIVE_CV_LINK_HERE"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-cv-link]").forEach(link => {
    link.href = siteConfig.cvUrl;
    if (siteConfig.cvUrl.includes("YOUR_GOOGLE_DRIVE")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        alert("Please add your latest Google Drive CV link in script.js.");
      });
    }
  });

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) toggle.textContent = "☰";
  }));

  const header = document.getElementById("site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, {passive:true});

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});

  document.querySelectorAll(".section-head,.skill-group,.timeline-item,.project,.bring-grid div,.impact-grid div,.education-list article").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity .65s ease, transform .65s ease";
    observer.observe(el);
  });
});