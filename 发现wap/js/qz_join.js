$(".join_submit input").on("click", function () {
  var text = $(".join_reason textarea").val();
  if (text == "") {
    alert("加群理由不能为空！");
    return false;
  } else {
    alert("请等待！");
    return true;
  }
})