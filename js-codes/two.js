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
// statics
let numbers = document.querySelectorAll(".number");
let statsSection = document.querySelector(".stats");
function startCount(el) {
    let target = +el.dataset.target;
    let count = 0;
    let increment = target / 150;
    let counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            if (target == 15) {
                el.innerText = "+" + target + "%";
            } else if (target == 600) {
                el.innerText = target + "k" + "+";
            } else if (target == 12) {
                el.innerText = target + "سنة";
            } else if (target == 9) {
                el.innerText = target + "%";
            }
            clearInterval(counter);
        } else {
            el.innerText = Math.floor(count);
        }
    }, 10);
}
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            numbers.forEach(num => {
                num.innerText = "0"; // يرجعه صفر
                startCount(num);
            });
        }
    });
}, {
    threshold: 0.5
});
observer.observe(statsSection);
