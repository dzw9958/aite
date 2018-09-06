$(".info_inf a").on("click", function(){
  var that = $(this);
  if(!that.hasClass("on")){
    that.addClass("on").text("已关注");
    alert("关注成功！");
  }else{
    that.removeClass("on").text("+关注");
    alert("取消成功！");
  }
})