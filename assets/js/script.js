document.addEventListener("DOMContentLoaded", initial);

const menu = document.getElementById("menu");
const navbar = document.getElementsByClassName("navbar");

function initial() {
  menu.onclick = function () {
    this.classList.toggle("fa-times");
    navbar[0].classList.toggle("nav-toggle");
  };

  window.addEventListener('scroll', function(){
    let scrollTop = document.querySelector('#scroll-top');
  
    if(window.scrollY > 60){
      scrollTop.classList.add('active');
    }else{
      scrollTop.classList.remove('active');
    }
  });
}




//********************************************************** */
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




//********************************************************** */
// fetch json files depending on call value to function//
async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("skills.json")
      :
      response = await fetch("projects.json")
  const data = await response.json();
  return data;
}

// *************************************************************//
//Show skills 
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
  showSkills(data);
  srtop.reveal('.skills .container .row .bar', {interval:50});
});
//********************************************************** */

//show projects//

function showProjects(projects){
  let projectsContainer = document.querySelector("#projects .box-container");
  let projectHTML = "";
  projects.forEach(project => {
    projectHTML += `<div class="box tilt ">
    <img draggable="false" src="./images/projects/${project.image}.jpg" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
      </div>
    `
    projectsContainer.innerHTML = projectHTML;
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
    });
  })

}

fetchData("projects").then(data =>{
  showProjects(data);
})


//********************************************************** */
// tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});





//********************************************************** */




//********************************************************** */
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
srtop.reveal('.about .heading', {delay:100});
srtop.reveal('.about .container ', {delay:200});
srtop.reveal('.about .container a ', {delay:200});
srtop.reveal('.about .content' , {interval:200})
srtop.reveal('.about .content p', {interval:200});

// skills section reveal//
srtop.reveal('.skills', {delay: 100})
srtop.reveal('.skills .heading', {delay:100})
srtop.reveal('.skills .container', {delay:100})

//education section reveal/
srtop.reveal('.education' , {delay:100})
srtop.reveal('.education .heading' , {delay:200})
srtop.reveal('.education .box-container .box' , {interval:100})