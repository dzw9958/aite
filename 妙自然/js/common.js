// 导航栏切换
$(".nav .nav_btn").on("click", function(e){
    var that = $(this);
    e.preventDefault();
    that.toggleClass('active');
    $('.nav_list').toggleClass('active');
})

// banner图轮播
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    autoplay: 3000,
    loop: true,
    moveStartThreshold: 100,
    autoplayDisableOnInteraction: false
})