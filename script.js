const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: 'disabled_swiper_button'
    },
  });
    
const buttonRes = document.querySelector('.reserve__button');
const buttonForm = document.querySelector('.but');
const form = document.querySelector('.form__container');

buttonRes.addEventListener('click', () => {
  form.classList.toggle('active');
})

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
})

