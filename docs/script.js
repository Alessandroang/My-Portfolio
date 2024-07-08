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
// Video popup per Pizzeria Fausta e Luciano
const videoLink = document.getElementById("video-link");
const videoPopup = document.getElementById("video-popup");
const closeButton = document.getElementById("close-video");

videoLink.addEventListener("click", function (e) {
  e.preventDefault();
  videoPopup.style.display = "block";
});

closeButton.addEventListener("click", function () {
  videoPopup.style.display = "none";
});

// Video popup per Deliveboo
const videoLinkDeliveboo = document.getElementById("video-link-deliveboo");
const videoPopupDeliveboo = document.getElementById("video-popup-deliveboo");
const closeButtonDeliveboo = document.getElementById("close-video-deliveboo");

videoLinkDeliveboo.addEventListener("click", function (e) {
  e.preventDefault();
  videoPopupDeliveboo.style.display = "block";
});

closeButtonDeliveboo.addEventListener("click", function () {
  videoPopupDeliveboo.style.display = "none";
});

// Close the video when clicking outside the content
window.addEventListener("click", function (event) {
  if (event.target == videoPopup) {
    videoPopup.style.display = "none";
  }
  if (event.target == videoPopupDeliveboo) {
    videoPopupDeliveboo.style.display = "none";
  }
});
