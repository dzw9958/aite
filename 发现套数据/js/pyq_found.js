$(".found_btn input").on("change", function () {
  var that = $(this);
  that.parent().siblings().remove();
  // 获取这次上传的图片
  var obj = that[0];
  // 获取这次上传的图片的数量
  var fl = obj.files.length;
  for (var i = 0; i < fl; i++) {
    var file = obj.files[i];
    var reader = new FileReader();
    //读取文件过程方法  
    // reader.onloadstart = function (e) {  
    // 	console.log("开始读取....");  
    // }  
    // reader.onprogress = function (e) {  
    // 	console.log("正在读取中....");  
    // }  
    reader.onabort = function (e) {
      alert("中断读取....")
    }
    reader.onerror = function (e) {
      alert("读取异常....")
    }
    reader.onload = function (e) {
      var imgstr = '<li><img src="' + e.target.result + '"/></li>';
      $(".found_img").append(imgstr);
    }
    reader.readAsDataURL(file);
  }
})
$(".found_submit input").on("click", function () {
  var str = "";
  var text = $(".found_text textarea").val();
  var image = $(".found_img input").val();
  if (text == "" && image == "") {
    str += " 内容不能为空！";
  }
  if (str !== "") {
    alert(str);
    return false;
  } else {
    alert("请等待！");
    return true;
  }
})