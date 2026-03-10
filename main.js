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
// landing
let backgroundOption = true;
let backgroundInterval;
let landingPage = document.querySelector('.landing-page');
let imgsArray =["one.jpg","two.jpg","three.jpg","five.jpg","six.jpg","four (1).jpg","landing.jpg"];
function randomizeImgs(){
    if(backgroundOption === true){
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("./images/' + imgsArray[randomNumber] + '")';
        }, 3000);
    }
}
randomizeImgs();
// search section
let section = document.querySelector(".reveal");
let observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section.classList.add("active");
        }else{
            section.classList.remove("active");
        }
    });
}, {
    threshold: 0.4
});
observers.observe(section);
// the counter
let numbers = document.querySelectorAll(".number");
let statsSection = document.querySelector(".stats");
function startCount(el) {
    let target = +el.dataset.target;
    let count = 0;
    let increment = target / 150;
    let counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            if (target == 24) {
                el.innerText = target + "/7";
            } else {
                el.innerText = target + "+";
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

