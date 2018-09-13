// 设置form表单提交地址
$(".found").attr("action", URL_wap + "index.php?act=find_circle&op=create");

$(".found_list").on("click", "img", function(){
  var that = $(this).parent();
  that.addClass("on").siblings().removeClass("on");
})

$(".found_submit input").on("click", function () {
  // var str = "";
  var name = $(".found_name input").val();
  // var label = $(".found_label input").val();
  // var condition = $(".found_condition input").val();
  // var summary = $(".found_condition textarea").val();
  var index = $(".found_list .on").data("input");
  $(".found_img input").val(index);
  if(name == ""){
    alert("群名称不能为空！");
    return false;
  }else{
    alert("请等待!");
    return false;
  }
})