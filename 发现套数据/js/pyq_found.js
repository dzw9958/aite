$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_theme&op=index");
$("form").attr("action", URL_wap + "index.php?act=find_theme&op=create");

// 图片上传
$(".found_btn input").eq(0).show().nextAll().hide();
$(".found_btn input").on("change", function () {
  var that = $(this);
  // 获取这次上传的图片
  var obj = that[0];
  var file = obj.files[0];
  var reader = new FileReader();
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
  that.hide().next().show();
})

// 表单提交事件
$(".found_submit input").on("click", function () {
  var str = "";
  var text = $(".found_text textarea").val();
  var image = $(".found_img input").val();
  if (text == "" && image == "") {
    str += " 内容不能为空！";
  }
  if (str !== "") {
    return alert(str);
  } else {
    // alert("请等待！");
    var url = URL_pc + "wap/index.php?act=find_theme&op=index";
    ajaxSubmit(url);
  }
})

