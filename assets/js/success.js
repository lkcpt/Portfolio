/* Scroll Reveal */

const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* Success Page */
srtop.reveal(".success .container .title", { delay: 200 });
srtop.reveal(".success .container .desc", { delay: 300 });
srtop.reveal(".success .container a", { delay: 400 });
