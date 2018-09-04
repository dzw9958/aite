// 点赞功能
$(".friend_likes").on("click", function(){
  var that = $(this);
  if(that.hasClass("on")){
    return alert("你已经点过赞了！");
  }else{
    $(this).addClass("on");
    return alert("点赞成功！");
  }
})
// 点击评论弹出评论框获取/失去焦点
$(".friend_btn").on("click", function(){
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
    $(".comment_text").val("").blur();
    return alert("评论成功！");
  }
})
