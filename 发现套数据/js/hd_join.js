$(".found_submit input").on("click", function () {
  var str = "";
  var name = $(".found_name input").val();
  var phone = $(".found_phone input").val();
  if (name == "") {
    str += " 称呼不能为空！"
  }
  if (phone == "") {
    str += " 手机不能为空！";
  }
  if (str !== "") {
    alert(str);
    return false;
  } else {
    alert("请等待！");
    return true;
  }
})