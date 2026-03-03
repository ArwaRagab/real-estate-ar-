let menuToggle = document.getElementById("menu-toggle");
let navLinks = document.querySelector(".nav-links");

menuToggle.onclick = function () {
//  e.stopPropagation(); 
    navLinks.classList.toggle("active");
};