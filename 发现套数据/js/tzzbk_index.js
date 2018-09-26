$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_cms_article&op=index");
$(".info").on("click", "a", function () {
  var that = $(".info a");
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_cms_article&op=LikeClass&class_id=" + Obj.class_id,
    dataType: "json",
    success: function (res) {
      var data = res.datas;
      if(data.error){
        return alert(data.error);
      }else if(data.status == 1 && !that.hasClass("on")){
        that.addClass("on").text("已关注");
      }else if(data.status == 1 && that.hasClass("on")){
        that.removeClass("on").text("+关注");
      }
      alert(data.msg);
    }
  });
})
