let menuToggle = document.getElementById("menu-toggle");
let navLinks = document.querySelector(".nav-links");

menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
};

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