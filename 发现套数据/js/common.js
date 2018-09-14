// 创建url链接
var URL_wap = "http://aitecc.com/mobile/";
var URL_pc = "http://aitecc.com/";

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

// 处理url函数返回对象
var Obj = {};
var queryObj = function () {
  // var str = window.location.href;
  var str = 'http://aitecc.com/wap/index.php?act=find_circle&op=join&id=1';
  str.split("?")[1].split("&").forEach(item => {
    Obj[item.split("=")[0]] = item.split("=")[1];
  })
}
