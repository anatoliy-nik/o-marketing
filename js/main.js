$(function(){
   
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

    $('.blog-slider__wrapper').slick({
        dots: true
      });

    $('.header__menu-btn').on('click', function() {
        $('.menu').toggleClass('menu-active');
    });

       
    var mixer = mixitup('.portfolio__content');
    // плагин mixitup нужно ставить последним (это его баг)

});