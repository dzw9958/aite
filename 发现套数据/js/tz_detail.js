$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_cms_article&op=list");
// 点赞功能
$(".com").on("click", ".com_likes", function () {
  var that = $(this);
  var like_id = that.data("id");
  var like_num = that.text() * 1;
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_cms_article&op=comment_up",
    data: {
      "comment_id": like_id
    },
    dataType: "json",
    success: function (response) {
      var data = response.datas;
      if (data.error) {
        if(data.error == "请登录"){
          alert(data.error);
          return window.location.href = URL_pc + "wap/index.php?act=login";
        }else{
          return alert(data.error);
        }
      } else if (data.status == 1) {
        like_num += 1;
        that.addClass("on");
        that.text(like_num);
      } else if (data.status == 2) {
        like_num -= 1;
        that.removeClass("on");
        that.text(like_num);
      }
      return alert(data.msg);
    }
  });
})

// 点击评论弹出评论框获取/失去焦点
$(".com_btn a").on("click", function () {
  $(".comment").fadeIn();
  $(".comment_text").focus();
})

$(".comment").on("click touchstart", function () {
  $(".comment_text").blur();
})

$(".comment_text").on("blur", function () {
  $(".comment").fadeOut();
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