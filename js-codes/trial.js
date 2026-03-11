// navbar toggle
let toggleBtn = document.querySelector(".toggle-btn");
let navLinks = document.querySelector(".nav-links");
let icon = document.querySelector(".toggle-btn i");
let links = document.querySelectorAll(".nav-links a");

toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  // نغير شكل الأيقونة
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
// يقفل المنيو لما أضغط على لينك
links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    // يرجع الأيقونة Bars
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});
/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
})