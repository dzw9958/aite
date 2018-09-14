// 设置form表单提交地址
queryObj();
$(".join").attr("action", URL_wap + "index.php?act=find_circle&op=join");
$("input[name=circle_id]").val(Obj.id);

// 提交事件处理
$(".join_submit input").on("click", function () {
  var text = $(".join_reason textarea").val();
  if (text == "") {
    return alert("加群理由不能为空！");
  } else {
    // alert("请等待！");
    ajaxSubmit();
  }
})