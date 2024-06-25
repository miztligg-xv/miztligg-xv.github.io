
// document.addEventListener("DOMContentLoaded", function () {
//     // Aplicamos el parallax a ambas secciones "start" y "sponsors"
//     const parallaxContainers = document.querySelectorAll(".parallax-container");
//     const parallaxElements = document.querySelectorAll(".parallax-content");

//     window.addEventListener("scroll", function () {
//         let scrollPosition = window.scrollY;
//         console.log("Original SP:" + scrollPosition);
//         parallaxContainers.forEach((container, index) => {
//             const parallaxElement = parallaxElements[index];
//             if (parallaxElement) {
//                 console.log(parallaxElement.style.transform = `translateY(${scrollPosition * 1}px) translateZ(-1px) scale(2)`)
//             }
//         });
//     });
// });

window.addEventListener('scroll', function() {
  const parallaxContent = document.querySelectorAll('.parallax-content');
  let scrollPosition = window.scrollY;
  console.log("SP:" + scrollPosition)

  parallaxContent[0].style.transform = `translateY(${scrollPosition * 1}px) translateZ(-1px) scale(2)`;
});


var countDownDate = new Date("Jul 27, 2024 15:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Expirado";
  }
}, 1000);