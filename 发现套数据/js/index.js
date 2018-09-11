// 点赞功能
$(".friend").on("click", ".friend_likes", function(){
  var that = $(this);
  var id = that.data("id");
  $.ajax({
    type: "get",
    url: "http://aitecc.com/mobile/index.php?act=find_theme&op=Like&theme_id" + id,
    dataType: "json",
    success: function (data) {
      var dataJons = data.datas;
      if(dataJons.error){
        return alert(dataJons.error);
      }else if(dataJons.status == 1){
        that.addClass("on");
      }else if(dataJons.status == 2){
        that.remove("on");
      }
      alert(dataJons.msg);
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
