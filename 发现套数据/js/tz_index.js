$(".card_type").on("click", "li", function(){
  var that = $(this);
  var type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
  console.log(type);
})

// banner图轮播
var mySwiperTwo = new Swiper('.swiper-container-two',{
  pagination: '.pagination-two',
  // paginationClickable: true,
  // autoplay: 3000,
  // loop: true,
  moveStartThreshold: 100,
  autoplayDisableOnInteraction: false
})