// 顶部导航点击切换搜索
$(".header_search").on("click", function(){
  $(".header_center input").toggle();
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