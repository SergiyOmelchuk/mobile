$(function () {


    $(".slider__inner, .news__slider-inner").slick({
        nextArrow: `<button type="button" class="slick-btn slick-next"></button>`,
        prevArrow: `<button type="button" class="slick-btn slick-prev"><a href="#"></a></button>`,
        infinite: false,
    });


    $('select').styler();

    $('.header__menu-btn').click(function() {

        $('.menu ul').slideToggle();
        $(".header__menu-btn div").toggleClass("icon-check");
        $(".header__menu-btn div").toggleClass("icon-bars");
    });

    // $(".header__menu-btn").on("click", function(){
    //     $(".header__menu-btn div").toggleClass("icon-check");
    // });

});