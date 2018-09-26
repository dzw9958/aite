// 创建url链接
var URL_wap = "http://aitecc.com/mobile/";
var URL_pc = "http://aitecc.com/";

$(".nav li:nth-child(3)").attr("href", URL_pc + "wap/index.php?act=find");

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
  var str = window.location.href;
  str.split("?")[1].split("&").forEach(item => {
    Obj[item.split("=")[0]] = item.split("=")[1];
  })
}
// 表单提交
function ajaxSubmit(url) {
  var options = {
    "success": resultForm,
    "resetForm": true,
    "dataType": "json"
  }
  $("form").ajaxSubmit(options);
  function resultForm(res){
    var data = res.datas;
    if(data.error){
      if(data.error == "请登录"){
        alert(data.error);
        return window.location.href = URL_pc + "wap/index.php?act=login";
      }else{
        return alert(data.error);
      }
    }else if(data.url){
      return window.location.href = data.url;
    }else if(url !== "#"){
      alert(data.msg);
      return window.location.href = url;
    }else if(url == "#"){
      return alert(data.msg);
    }
  }
}