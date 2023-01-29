const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: 'disabled_swiper_button'
    },
  });

  $('.menuBtn').click(() => {
    $('.menuBox').toggleClass('menuActive');
  })

  $('.reserve__button').click(() => {
    $('.form__container').toggleClass('active');
  });

  //for POST

  $(".form").on("submit", function(){
    $.ajax({
      url: '...url',
      method: 'post',
      dataType: 'html',
      data: $(this).serialize(),
      success: function(data){
        console.log(data);
      }
    });
  });

  //for GET

  $(".form").on("submit", function(){
    $.ajax({
      url: 'https://api.publicapis.org/entries',
      method: 'get',
      dataType: 'html',
      success: function(data){
        console.log(data);
      }
    });
  });

 

