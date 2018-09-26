$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_circle&op=index");
// 设置form表单提交地址
$(".found").attr("action", URL_wap + "index.php?act=find_circle&op=create");

$(".found_list").on("click", "img", function () {
  var that = $(this).parent();
  that.addClass("on").siblings().removeClass("on");
})

$(".found_submit input").on("click", function () {
  var name = $(".found_name input").val();
  var index = $(".found_list .on").data("input");
  $(".found_img input").val(index);
  if (name == "") {
    return alert("群名称不能为空！");
  } else {
    // alert("请等待!");
    var url = URL_pc + "wap/index.php?act=find_circle&op=index";
    ajaxSubmit(url);
  }
})
