
var mySwiper = new Swiper('.active_container',{
    autoplay: 3000,
    loop: true,
    moveStartThreshold: 100,
    autoplayDisableOnInteraction: false,
})
$('.arrow-left').on('click', function(e){
    e.preventDefault();
    mySwiper.swipePrev();
})
$('.arrow-right').on('click', function(e){
    e.preventDefault();
    mySwiper.swipeNext();
})
  