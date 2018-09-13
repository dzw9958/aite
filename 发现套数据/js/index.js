// 点赞功能
$(".friend").on("click", ".friend_likes", function(){
  var that = $(this);
  var theme_id = that.data("id");
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_theme&op=Like&theme_id" + theme_id,
    dataType: "json",
    success: function (response) {
      var data = response.datas;
      if(data.error){
        return alert(data.error);
      }else if(data.status == 1){
        that.addClass("on");
      }else if(data.status == 2){
        that.remove("on");
      }
      alert(data.msg);
    }
  });
})
// 点击评论弹出评论框获取/失去焦点
$(".friend").on("click", ".friend_btn", function(){
  $(".comment").fadeIn();
  $(".comment_text").focus();
})

$(".comment").on("click touchstart", function(){
  $(".comment_text").blur();
})

$(".comment_text").on("blur", function(){
  $(".comment").fadeOut();
})

// 阻止冒泡事件
$(".comment_text").on("click touchstart", function(e){
  e.stopPropagation();
})
$(".comment_submit").on("click touchstart", function(e){
  e.stopPropagation();
  var text = $(".comment_text").val();
  if(text == ""){
    return alert("评论不能为空！");
  }else{
    $(".comment_text").val("");
    return alert("评论成功！");
  }
})
