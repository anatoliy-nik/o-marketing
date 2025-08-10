$(function () {

  $(".menu a, .header__icon, .footer__top-link").on("click", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  $('.blog-slider__wrapper').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 431,
        settings: {
          arrows: false
        }
      }
    ]

    
  });

  $('.header__menu-btn, .menu__list-link').on('click', function () {
    $('.menu').toggleClass('menu-active');
  });

  var mixer = mixitup('.portfolio__content');
  // плагин mixitup нужно ставить последним (это его баг)

});