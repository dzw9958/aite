$(".found_img input").on("change", function () {
  var that = $(this);
  // 获取这次上传的图片
  var obj = that[0];
  var file = obj.files[0];
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
    console.log(21);
    $(".found_img img").attr("src", e.target.result);
  }
  reader.readAsDataURL(file);
})

$(".found_submit input").on("click", function () {
  // var str = "";
  var name = $(".found_name input").val();
  // var label = $(".found_label input").val();
  // var condition = $(".found_condition input").val();
  // var summary = $(".found_condition textarea").val();
  if(name == ""){
    alert("群名称不能为空！");
    return false;
  }else{
    alert("请等待!");
    return true;
  }
})