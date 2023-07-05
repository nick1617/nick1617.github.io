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
  loop: true,
});

// download resume btn on about page//
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "./assets/docs/Nisarg_resume_latest.pdf";
    link.download = "./assets/docs/Nisarg_resume_latest.pdf";
    link.click();
  });
