// 顶部导航点击切换搜索
$(".header_search").on("click", function () {
  var input = $(".header_center input");
  var value = input.val();
  if (!input.hasClass("on")) {
    return input.addClass("on");
  } else if (value == "") {
    return input.removeClass("on");
  } else if (value !== "") {
    input.val("");
    $(this).attr("href", "http://aitecc.com/wap/index.php?act=find&op=search&key=" + value);
  }
})

// banner图轮播
function switchImg() {
  this.name = new Swiper('.swiper-container', {
    pagination: '.pagination',
    paginationClickable: true,
    autoplay: 3000,
    loop: true,
    moveStartThreshold: 100,
    autoplayDisableOnInteraction: false
  })
}