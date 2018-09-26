queryObj();
$("form input[name=id]").val(Obj.id);
$("form").attr("action", URL_wap + "index.php?act=find_activity&op=Addsign");

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
    return alert(str);
  } else {
    // alert("请等待！");
    var url = URL_pc + "wap/index.php?act=find_activity&op=index";
    ajaxSubmit(url);
  }
})