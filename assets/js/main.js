/* Active Nav Bar */
function showActiveMenu() {
  const section = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header--menu__items > a");

  window.addEventListener("scroll", () => {
    let current = "";
    section.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((li) => {
      li.classList.remove("active");
      if (current == li.getAttribute("href").split("#")[1]) {
        li.classList.add("active");
      }
    });
  });
}

showActiveMenu();

/* Smooth Scroll */
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 50,
    },
    400,
    "linear"
  );
});

/* Auto type Animation */
let typed = new Typed(".auto-type", {
  strings: ["Web Designing", "Frontend Developement", "Web Developement"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

/* Tilt Effect Home */
const box = document.querySelector(".home--container--img");
const circle = document.querySelector(".home--container--img--circle");
const img1 = document.querySelector("#pro-pic");
const img2 = document.querySelector("#bg-pro");

box.addEventListener("mousemove", (e) => {
  let horizontal = (window.innerWidth / 2 - e.pageX) / 25;
  let vertical = (window.innerHeight / 2 - e.pageY) / 25;

  circle.style.transform = `rotateX(${vertical}deg) rotateY(${horizontal}deg)`;
});

box.addEventListener("mouseenter", (e) => {
  circle.style.transition = "0.2s";
  img2.style.transform = "translateZ(120px)";
  img1.style.transform = "translateZ(200px)";
});

box.addEventListener("mouseleave", (e) => {
  circle.style.transition = "0.2s";
  circle.style.transform = "rotateY(0deg) rotateX(0deg)";
});

/* Experience Section Swiper Initialize*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Scroll Reveal */

const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* Home Scroll */
srtop.reveal(".home--container--text__title", { delay: 200 });
srtop.reveal(".home--container--text__desc", { delay: 300 });
srtop.reveal(".home--container--text q", { delay: 400 });
srtop.reveal(".home--container--text .btn-primary", { delay: 500 });
srtop.reveal(".home--container--text .social-media", { delay: 600 });

srtop.reveal(".home--container--img", { delay: 400 });

/* About Scroll */
srtop.reveal(".about--container--title", { delay: 200 });
srtop.reveal(".about--container--contents .img", { delay: 500 });
srtop.reveal(".about--container--contents .bio-head", { delay: 300 });
srtop.reveal(".about--container--contents .bio", { delay: 400 });
srtop.reveal(".about--container--contents .personal .col1", { delay: 600 });
srtop.reveal(".about--container--contents .personal .col2 a", { delay: 600 });
srtop.reveal(".about--container--contents .personal .col2 ", { delay: 500 });

/* Education Scroll */
srtop.reveal(".education .title", { delay: 200 });
srtop.reveal(".education .timeline", { delay: 400 });
srtop.reveal(".education .timeline .container", { interval: 400 });

/* Experience */
srtop.reveal(".experience--container .title", { delay: 200 });
srtop.reveal(".experience--container .exp-nav", { delay: 300 });

srtop.reveal(".experience--container .desc .company ", { delay: 300 });
srtop.reveal(".experience--container .desc .company .role", { delay: 400 });
srtop.reveal(".experience--container .desc .company .c-name", { delay: 500 });
srtop.reveal(".experience--container .desc .company .details", { delay: 600 });
srtop.reveal(".experience--container .desc .company .description", {
  delay: 700,
});
srtop.reveal(".experience--container .desc .company .c-website", {
  delay: 800,
});

