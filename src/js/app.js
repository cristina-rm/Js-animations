const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// End section
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
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
    console.log(scrollPosition);
});

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount;
    video.currentTime = delay;
}, 33.3);

// Object moving on hover animation, section 2