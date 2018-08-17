// 导航栏切换
$(".nav .nav_btn").on("click", function(e){
    var that = $(this);
    e.preventDefault();
    that.toggleClass('active');
    $('.nav_list').toggleClass('active');
})

var imgSwiper = new Swiper('.swiper-container',{
    slidesPerView: 4
})
$('.arrow-left').on('click', function(e){
    e.preventDefault();
    imgSwiper.swipePrev();
})
$('.arrow-right').on('click', function(e){
    e.preventDefault();
    imgSwiper.swipeNext();
})

var big_img = $(".goods_big img");
$(".goods_small").on("mouseenter", "img", function(){
    var that = $(this);
    var imgsrc = that.attr("src");
    that.parent().addClass("active").siblings().removeClass("active");
    big_img.attr("src", imgsrc);
})