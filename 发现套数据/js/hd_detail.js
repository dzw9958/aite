$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_activity&op=list");
// 点赞功能
$(".com").on("click", ".com_likes", function () {
  var that = $(this);
  var like_id = that.data("id");
  var like_num = that.text() * 1;
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_activity&op=comment_up",
    data: {
      "id": like_id
    },
    dataType: "json",
    success: function (response) {
      var data = response.datas;
      if (data.error) {
        return alert(data.error);
      } else if (data.result == 1) {
        like_num += 1;
        that.addClass("on");
        that.text(like_num);
      } else if (data.result == 2) {
        like_num -= 1;
        that.removeClass("on");
        that.text(like_num);
      }
      return alert(data.msg);
    }
  });
})

// 点击评论弹出评论框获取/失去焦点
$(".com").on("click", ".com_btn a", function () {
  $(".comment").fadeIn();
  $(".join").fadeOut();
  $(".comment_text").focus();
  $(".comment form").attr({"action": URL_wap+ "index.php?act=find_activity&op=Addcomment&id=" + Obj.id});
})

$(".comment").on("click touchstart", function () {
  $(".comment_text").blur();
})

$(".comment_text").on("blur", function () {
  $(".comment").fadeOut();
  $(".join").fadeIn();
})

// 阻止冒泡事件
$(".comment_text").on("click touchstart", function (e) {
  e.stopPropagation();
})
$(".comment_submit").on("click", function (e) {
  e.stopPropagation();
  var text = $(".comment_text").val();
  if (text == "") {
    return alert("评论不能为空！");
  } else {
    // $(".comment_text").val("");
    // return alert("评论成功！");
    var url = "#";
    ajaxSubmit(url);
    window.location.reload();
  }
})

$(".com").on("click", ".com_speak", function(){
  var that = $(this);
  var parentid = that.next().data("id");
  $(".comment").fadeIn();
  $(".join").fadeOut();
  $(".comment_text").focus();
  $(".comment form").attr({"action": URL_wap+ "index.php?act=find_activity&op=Addcomment&id=" + Obj.id + "&parentid=" + parentid});
})