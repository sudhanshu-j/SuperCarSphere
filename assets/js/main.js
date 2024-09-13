// 1. Navigation Menu: When the user clicks on the hamburger icon, the navigation menu should slide in from the right side of the screen.
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("menu-btn"),
  navClose = document.getElementById("close-btn");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// 2. Navigation Menu: when the user clicks on a menu item, the navigation menu should close and the page should scroll to the corresponding section.

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// 3. Swiper Carousel: it creates a swiper carousel for the home page.

const SwiperHome = new Swiper(".home-swiper", {
  speed: 1200,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return (
        '<span class="' +
        className +
        '">' +
        String(index + 1).padStart(2, "0") +
        "</span>"
      );
    },
  },
});

// 4. GSAP: it adds the smooth scrolling animation to the website.

gsap.from(".panel-1", { y: -1000, duration: 2 });
gsap.from(".panel-2", { y: 1000, duration: 2 });
gsap.from(".image", { x: 1000, duration: 2 });
gsap.from(".titles", { y: 100, opacity: 0, delay: 2 });
gsap.from(".title", { y: 100, opacity: 0, delay: 2.1 });

// 5. Add blur header: it adds a blur effect to the header when the user scrolls down.

const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
