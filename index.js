const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger(){
  navbar.classList.toggle("showNav");
  hamburger.classList.toggle("showClose");
}

const menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener("click", toggleHamburger);
  }
)