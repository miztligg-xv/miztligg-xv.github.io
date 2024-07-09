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
  let elemName = 'obv_element_' + elemCounter;
  let elemNameid = document.getElementById(elemName);
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

let swiper = new Swiper(".card_slider", {
  // slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Función para verificar si el dispositivo es móvil
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// Manejar la sumisión del formulario
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked').value;

  let message;

  if (attendance === 'yes') {
      message = `Hola, soy ${name}. Confirmo que asistiré a los XV años de Miztli.`;
  } else {
      message = `Hola, soy ${name}. Lamento informar que no podré asistir a los XV años de Miztli. Mis más sinceras disculpas.`;
  }

  const encodedMessage = encodeURIComponent(message);

  // Usar la función mobileCheck para determinar el enlace adecuado
  const isMobile = window.mobileCheck();

  let whatsappLink;

  if (isMobile) {
      // Si es un dispositivo móvil, usar el enlace tradicional de WhatsApp
      whatsappLink = `https://wa.me/+525646104115?text=${encodedMessage}`;
  } else {
      // Si es una computadora, usar el enlace de WhatsApp Web
      whatsappLink = `https://web.whatsapp.com/send?phone=+525646104115&text=${encodedMessage}`;
  }

  // Abrir WhatsApp con el mensaje precompuesto
  window.open(whatsappLink, '_blank');
});

const audio = document.getElementById("myaudio");
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
audio.volume = 0.2;

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.src="../assets/pause-solid.svg";
  } else {
    audio.pause();
    playIcon.src="../assets/play-solid.svg";
  }
});