document.addEventListener("DOMContentLoaded", initial);

const menu = document.getElementById("menu");
const navbar = document.getElementsByClassName("navbar");

function initial() {
  menu.onclick = function () {
    this.classList.toggle("fa-times");
    navbar[0].classList.toggle("nav-toggle");
  };
}

// tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});

// typed js

let typed = new Typed("#element", {
  strings: [
    "Welcome to my Portfolio.",
    "I am a passionate Computer engineer.",
    "Transforming Ideas into Tech.",
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
  loop: true,
});

// scroll REVEL animations//

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

// SCROLL HOME//
srtop.reveal('.home', {delay:100});
srtop.reveal('.home .content ', {interval:200});
srtop.reveal('.home .content .image img', {delay:400});
srtop.reveal('.home .socials .social-icons li', { interval: 200 });



// SCROLL ABOUT ME//
srtop.reveal('.about ', {delay:100});
srtop.reveal('.about .container ', {delay:200});
srtop.reveal('.about .container a ', {delay:200});
srtop.reveal('.about .content' , {interval:200})
srtop.reveal('.about .content p', {interval:200});


