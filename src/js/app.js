const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// End section
const section1 = document.getElementById("section1");
const end = section1.querySelector("h1");

// Declare Scroll magic controller
const controller = new ScrollMagic.Controller();

// Scroll on video play animation
const scene = new ScrollMagic.Scene({
    duration: 6000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// Video animations
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000;
    // console.log(scrollPosition);
});

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    video.currentTime = delay;
}, 33.3);

// ************************** Section 2 **************************

// Items
const section2 = document.getElementById("section2");
const container2 = document.querySelector(".container2");
const card2 = document.querySelector(".card2");
const title2 = card2.querySelector(".title2");
const description2 = card2.querySelector(".description2");
const truckImage = card2.querySelector(".truck-image");
const button2 = card2.querySelector(".button2");

container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 21;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container2.addEventListener("mouseenter", (e) => {
    card2.style.transform = "none";
    // Pop out effect
    /*title2.style.transform = "translateZ(150px)";
    description2.style.transform = "translateZ(50px)";
    truckImage.style.transform = "translateZ(50px)";*/
});

// Animate out
container2.addEventListener("mouseleave", (e) => {
    // card2.style.transition = "all 0.5s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Pop back effect
    // title2.style.transform = "translateZ(0px)";
});

// ************************** Section 3 **************************
const container3 = document.querySelector(".container3");
const card3 = document.querySelector(".card3");
const title3 = card3.querySelector(".title3");
const description3 = card3.querySelector(".description3");
const truckImage3 = card3.querySelector(".truck-image");
const button3 = card3.querySelector(".button3");

container3.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 21;
    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container3.addEventListener("mouseenter", (e) => {
    card3.style.transform = "none";

    // Pop out effect
    truckImage3.style.transform = "translateZ(150px)";
    truckImage3.style.transform = "scale(1.5)";
    title3.style.transform = "translateZ(120px)";
    description3.style.transform = "translateZ(120px)";
    button3.style.transform = "translateZ(175px)";
});

// Animate out
container3.addEventListener("mouseleave", (e) => {
    // card3.style.transition = "all 0.5s ease";
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // Pop back effect
    truckImage3.style.transform = "translateZ(0px)";
    title3.style.transform = "translateZ(0px)";
    description3.style.transform = "translateZ(0px)";
    button3.style.transform = "translateZ(0px)";
});
