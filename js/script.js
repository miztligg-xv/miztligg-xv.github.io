
window.addEventListener('scroll', function() {
    const parallaxContent = document.querySelector('.parallax-content');
    let scrollPosition = window.scrollY;

    parallaxContent.style.transform = `translateY(${scrollPosition * 1}px) translateZ(-1px) scale(2)`;
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