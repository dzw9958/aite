// 创建帖子类型变量
var type = 1;

// banner图轮播
var switchImgTwo = function () {
  this.name = new Swiper('.swiper-container-two', {
    pagination: '.pagination-two',
    // paginationClickable: true,
    // autoplay: 3000,
    // loop: true,
    moveStartThreshold: 100,
    autoplayDisableOnInteraction: false
  })
}

$(".card").on("click", ".card_type li", function () {
  var that = $(this);
  type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
  LoadingDataFn();
})

//加载数据
var LoadingDataFn = function () {
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_cms_article&op=index",
    data: {
      "orderType": type
    },
    dataType: "json",
    success: function (res) {
      var data = res.datas;
      $(".card_box").html($("#tmp4").tmpl(data));
    }
  });
};