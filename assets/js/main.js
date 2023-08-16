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

/* Clock*/
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "am";

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

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

/* Experience reveal */

let asuran = document.getElementById("asuran-btn");
let flometriq = document.getElementById("flometriq-btn");

let asuran_content = document.getElementById("asuran");
let flometriq_content = document.getElementById("flometriq");

asuran.addEventListener("click", () => {
  asuran_content.style.transform = "translateX(37%)";
  flometriq_content.style.transform = "translateX(200%)";
  asuran.classList.add("active");
  flometriq.classList.remove("active");
  asuran_content.style.transitionDelay = "0.5s";
  flometriq_content.style.transitionDelay = "0s";
});

flometriq.addEventListener("click", () => {
  asuran_content.style.transform = "translateX(200%)";
  flometriq_content.style.transform = "translateX(37%)";
  asuran.classList.remove("active");
  flometriq.classList.add("active");
  asuran_content.style.transitionDelay = "0s";
  flometriq_content.style.transitionDelay = "0.5s";
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

/* Skills */
srtop.reveal(".skills--container .title-holder .title", { delay: 200 });
srtop.reveal(".skills--container .title-holder q", { delay: 300 });
srtop.reveal(".skills--container .skill-holder .skill-set", { delay: 400 });
srtop.reveal(".skills--container .skill-holder .skill-set .circle", {
  delay: 200,
});
srtop.reveal(".skills--container .skill-holder .frontend .circle", {
  interval: 300,
});
srtop.reveal(".skills--container .skill-holder .backend .circle", {
  interval: 300,
});
srtop.reveal(".skills--container .skill-holder .professional .circle", {
  interval: 300,
});

/* Experience */
srtop.reveal(".experience--container .title", { delay: 200 });
srtop.reveal(".experience--container .btn-box", { delay: 300 });

srtop.reveal(".experience--container .items ", { delay: 300 });
srtop.reveal(".experience--container .items .company .role", { delay: 400 });
srtop.reveal(".experience--container .items .company .c-name", { delay: 500 });
srtop.reveal(".experience--container .items .company .details", { delay: 600 });
srtop.reveal(".experience--container .items .company .description", {
  delay: 700,
});
srtop.reveal(".experience--container .items .company .c-website", {
  delay: 800,
});

/* Projects */

srtop.reveal(".projects--title", { delay: 200 });
srtop.reveal(".projects .cards .project-cards", { delay: 300 });
srtop.reveal(".projects .cards .project-cards .project-img", { delay: 400 });
srtop.reveal(".projects .cards .project-cards .project-head", { delay: 500 });
srtop.reveal(".projects .cards .project-cards .abstract", { delay: 600 });
srtop.reveal(".projects .cards .project-cards .category", { delay: 700 });
srtop.reveal(".projects .cards .project-cards .card-btn", { delay: 800 });
