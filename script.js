const texts = [
  "Frontend Developer",
  "Passionate Developer",
  "Web Enthusiast",
  "UI/UX & SEO Driven"
];

let i = 0;
let j = 0;
let isDeleting = false;

const el = document.getElementById("typing-text");

function type() {
  let current = texts[i];

  if (!isDeleting) {
    el.textContent = current.substring(0, j++);
  } else {
    el.textContent = current.substring(0, j--);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === current.length + 1) {
    speed = 1500;
    isDeleting = true;
  } 
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, speed);
}

type();



const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  // icon change
  if (navbar.classList.contains("active")) {
    toggle.innerHTML = '<i class="fa fa-times"></i>'; // cross
  } else {
    toggle.innerHTML = '<i class="fa fa-bars"></i>'; // menu
  }
});

