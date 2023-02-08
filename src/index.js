import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../public/assets/css/style.css';

//Mudar o estilo do menu com scroll:
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// BOTÃO DE CONTATO (TEXTO CIRCULAR):

const textBtn = document.querySelectorAll('.contact_btn')

textBtn.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => 
    `<span style="transform: rotate(${index * 12}deg)">
    ${character}</span>`).join('')
})

//slider da galera:
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
  });

  const nav = document.querySelector('.nav_links');
  const openNavBtn = document.querySelector('#nav_toggle-open');
  const closeNavBtn = document.querySelector('#nav_toggle-close');


  const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
  }

  openNavBtn.addEventListener('click', openNav);

  const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }

  closeNavBtn.addEventListener('click', closeNav);

//
if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}