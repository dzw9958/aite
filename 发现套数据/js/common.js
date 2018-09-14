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
  var str = 'http://aitecc.com/wap/index.php?act=find_circle&op=join&id=57';
  str.split("?")[1].split("&").forEach(item => {
    Obj[item.split("=")[0]] = item.split("=")[1];
  })
}
// 表单提交
function ajaxSubmit() {
  var options = {
    "success": resultForm,
    "resetForm": true,
    "dataType": "json"
  }
  $("form").ajaxSubmit(options);
  function resultForm(res){
    var data = res.datas;
    if(data.error){
      return alert(data.error);
    }else{
      return alert(data.msg);
    }
  }
}