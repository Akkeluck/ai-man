
/* TICKER */

$('.offer__marquee').marquee({
    duration: 13000,
    gap: 80,
    direction: 'left',
    duplicated: true
});

/* TABS */

$('.techologies-content__tab-item').on('click',function(event){
    event.preventDefault();
    var currTab = $(this).index();

    $('.techologies-content__tab-item').removeClass('techologies-content__tab-item_active');
    $(this).addClass('techologies-content__tab-item_active');

    $('.techologies-content__item').removeClass('techologies-content__item_active');
    $('.techologies-content__item').eq(currTab).addClass('techologies-content__item_active');
})

/* SLIDER */

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: -320,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    },
    navigation: {
        nextEl: '.support-wrap__btn_right',
        prevEl: '.support-wrap__btn_left',
    },
});
var mySwiperSec = new Swiper ('.swiper-cont', {
    direction: 'horizontal',
    spaceBetween: 150,
    slidesPerView: 5,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2500
    },
});
var mySwiperSec = new Swiper ('.swiper-area', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 4,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2800
    },
});

/* PARALLAX */

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);