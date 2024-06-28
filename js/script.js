document.addEventListener('DOMContentLoaded', function() {
  const parallaxContent = document.querySelectorAll('.parallax-content');
  
  // Configuración del IntersectionObserver
  const observerOptions = {
    root: null, // Observa dentro de la ventana de visualización
    threshold: 0.1 // Empieza el efecto cuando el 10% del elemento es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si el elemento está en el viewport, aplica el efecto parallax
        const element = entry.target;

        window.addEventListener('scroll', function onScroll() {
          let scrollPosition = window.scrollY;
          let elementTop = element.getBoundingClientRect().top + scrollPosition;

          // Calculamos la nueva posición para el efecto parallax
          let translateY = Math.max(0, scrollPosition - elementTop);

          // Aplicamos la transformación parallax
          element.style.transform = `translateY(${translateY}px) translateZ(-1px) scale(2)`;

          // Detach the scroll listener if the element goes out of the viewport
          if (!entry.isIntersecting) {
            window.removeEventListener('scroll', onScroll);
          }
        });

        // Deja de observar el elemento una vez que ha entrado en el viewport
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observamos cada elemento parallax
  parallaxContent.forEach(element => {
    observer.observe(element);
  });
});

const cargarElem = (entradas, observador) => {
	entradas.forEach((entrada, index) => {
	  if (entrada.isIntersecting) {
			entrada.target.classList.add('inside');
	  }
	});
}

const observador = new IntersectionObserver(cargarElem, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.2
});

let elemCounter = 0;
while (elemCounter <= 10) {
  var elemName = 'obv_element_' + elemCounter;
  var elemNameid = document.getElementById(elemName);
  if (elemNameid) {
    observador.observe(elemNameid);
  }
  elemCounter++;
}


let countDownDate = new Date("Jul 27, 2024 15:00:00").getTime();

let x = setInterval(function() {

let now = new Date().getTime();

let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Expirado";
  }
}, 1000);