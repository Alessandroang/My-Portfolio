const date = document.getElementById("date");
const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  date.textContent = currentYear;
};
setCurrentYear();

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const socials = document.querySelector(".social-nav");
const navLinks = document.querySelectorAll(".nav-links");

const toggleMobileMenu = () => {
  hamburger.classList.toggle("open");
  navList.classList.toggle("open");
  socials.classList.toggle("open");
  document.body.classList.toggle("open");
};

navLinks.forEach((link) => link.addEventListener("click", toggleMobileMenu));
hamburger.addEventListener("click", toggleMobileMenu);

// initialize aos (library for scroll animation)
AOS.init();

document
  .getElementById("video-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const videoPopup = document.getElementById("video-popup");
    const video = document.getElementById("presentation-video");
    videoPopup.style.display = "block";
    video.play(); // Avvia il video automaticamente quando il popup viene mostrato
  });

document.getElementById("close-video").addEventListener("click", function () {
  const videoPopup = document.getElementById("video-popup");
  const video = document.getElementById("presentation-video");
  videoPopup.style.display = "none";
  video.pause(); // Ferma il video quando il popup viene chiuso
});
