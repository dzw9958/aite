// 点赞功能
$(".friend").on("click", ".friend_likes", function(){
  var that = $(this);
  var like_id = that.data("id");
  var like_num = that.text() * 1;
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_theme&op=Like",
    data: {
      "theme_id": like_id
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
$(".friend").on("click", ".friend_btn", function(){
  var that = $(this);
  var theme_id = that.next().data("id");
  $(".comment").fadeIn();
  $(".nav").fadeOut();
  $(".comment_text").focus();
  $(".comment form").attr({"action": URL_wap+ "index.php?act=find_theme&op=AddThreply&theme_id=" + theme_id});
})

$(".comment").on("click touchstart", function(){
  $(".comment_text").blur();
})

$(".comment_text").on("blur", function(){
  $(".comment").fadeOut();
  $(".nav").fadeIn();
})

// 阻止冒泡事件
$(".comment_text").on("click touchstart", function(e){
  e.stopPropagation();
})
$(".comment_submit").on("click", function(e){
  e.stopPropagation();
  var text = $(".comment_text").val();
  if(text == ""){
    return alert("评论不能为空！");
  }else{
    // $(".comment_text").val("");
    // return alert("评论成功！");
    var url = "#";
    ajaxSubmit(url);
    window.location.reload();
  }
})

//9/25增加点击图片看大图
// $(".friend").on("click", ".friend_img li", function(){
//   var that = $(this);
//   var src = that.attr("style").split("(")[1].split(")")[0];
//   $(".mask").fadeIn().find(".mask_box").html('<img src="'+ src +'">')
// })
// $(".mask").on("click touchstart", function(){
//   var that = $(this);
//   that.fadeOut();
// })

$(".friend").on("click", ".friend_img li", function(){
  var html = '<div class="mask_box swiper-wrapper">';
  var src = "";
  var that = $(this);
  var i = that.index();
  that.parent().find("li").each(function(index, e){
    src = $(this).attr("style").split("url(")[1].split(");")[0];
    html += '<div class="swiper-slide">';
    html += '<img src="' + src + '">';
    html += '</div>';
  })
  html += '</div>';
  html += '<i class="mask_close"></i>';
  $(".mask").fadeIn().html(html);
  var mySwiperTwo = new switchImgTwo(i);
})

$(".mask").on("click", function(){
  var that = $(this);
  that.fadeOut();
})

function switchImgTwo(index) {
  this.name = new Swiper('.swiper-container2', {
    paginationClickable: true,
    initialSlide: index
  })
}