$(function(){
    // var mixer = mixitup('.container');
    var mixer = mixitup('.portfolio__content');

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

    $('.blog-slider__wrapper').slick({
        dots: true
      });
});