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

/* Menu responsive */
function showMenu() {
  const header_menu = document.querySelector(".header--menu");
  const icon = document.querySelectorAll(".toggle-icon");

  header_menu.classList.toggle("show");
  icon.forEach((i) => {
    i.classList.toggle("hidden");
  });
}

const toggle_btn = document.getElementById("hamburger");
toggle_btn.addEventListener("click", showMenu);

/* close on menu click */
function actOnMenuClick() {
  const navLinks = document.querySelectorAll(".header--menu li a");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", showMenu);
  }
}

actOnMenuClick();

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
  asuran_content.classList.add("active");
  flometriq_content.classList.remove("active");
  asuran.classList.add("acctive");
  flometriq.classList.remove("acctive");
  asuran_content.style.transitionDelay = "0.5s";
  flometriq_content.style.transitionDelay = "0s";
});

flometriq.addEventListener("click", () => {
  asuran_content.classList.remove("active");
  flometriq_content.classList.add("active");
  asuran.classList.remove("acctive");
  flometriq.classList.add("acctive");
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
srtop.reveal(".home--container--text .scroll", { interval: 200 });

srtop.reveal(".home--container--img", { delay: 300 });

/* About Scroll */
srtop.reveal(".about--container--title", { delay: 100 });
srtop.reveal(".about--container--contents .img", { delay: 200 });
srtop.reveal(".about--container--contents .text .scroll", { interval: 200 });

/* Education Scroll */
srtop.reveal(".education .title", { delay: 100 });
srtop.reveal(".education .timeline", { delay: 300 });
srtop.reveal(".education .timeline .container", { interval: 200 });

/* Skills Scroll */
srtop.reveal(".skills--container .title-holder .scroll", { interval: 200 });
srtop.reveal(".skills--container .skill-holder .skill-set", { delay: 300 });
srtop.reveal(".skills--container .skill-holder .circle", { interval: 200 });

/* Experience Scroll */
srtop.reveal(".experience--container .title", { delay: 100 });
srtop.reveal(".experience--container .btn-box", { delay: 200 });
srtop.reveal(".experience--container .items .company .scrolla", {
  interval: 200,
});
srtop.reveal(".experience--container .items .company .scrollf", {
  interval: 200,
});

/* Projects Scroll */

srtop.reveal(".projects--title", { delay: 100 });
srtop.reveal(".projects .cards .project-cards", { delay: 200 });
srtop.reveal(".projects .cards .project-cards .project-img", { delay: 200 });
srtop.reveal(".projects .cards .project-cards .scrollo", { interval: 200 });
srtop.reveal(".projects .cards .project-cards .scrolle", { interval: 200 });
srtop.reveal(".projects .cards .project-cards .scrollp", { interval: 200 });

/* Contact Scroll */
srtop.reveal(".contact--title", { delay: 100 });
srtop.reveal(".contact--info", { delay: 200 });
srtop.reveal(".contact--form .img", { delay: 200 });
srtop.reveal(".contact--form .form-elements", { delay: 300 });
srtop.reveal(".contact--form .form-elements", { delay: 300 });
