$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find&op=index");
// 点赞功能
var box = $(".friend_box");
var mark = $(".comment");
var text = $(".comment_text");
box.on("click", ".friend_likes", function(){
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
box.on("click", ".friend_btn", function(){
  var that = $(this);
  var theme_id = that.next().data("id");
  mark.fadeIn();
  text.focus();
  $(".comment form").attr({"action": URL_wap+ "index.php?act=find_theme&op=AddThreply&theme_id=" + theme_id});
})

mark.on("click touchstart", function(){
  text.blur();
})

text.on("blur", function(){
  mark.fadeOut();
})

// 阻止冒泡事件
text.on("click touchstart", function(e){
  e.stopPropagation();
})
$(".comment_submit").on("click", function(e){
  e.stopPropagation();
  var value = text.val();
  if(value == ""){
    return alert("评论不能为空！");
  }else{
    // text.val("");
    // return alert("评论成功！");
    var url = "#";
    ajaxSubmit(url);
    window.location.reload();
  }
})

/* 下拉加载更多 */
var is_nextpage_true = 1;
var type = $(".header_center .on").data("type");

var page = 2;
var timers = null;

$(".header_center").on("click","span", function(){
  var that = $(this);
  type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
  page = 1;
  is_nextpage_true = 1;
  $(".friend_box").empty();
  LoadingDataFn();
})

//加载数据
var LoadingDataFn = function () {
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_theme&op=index",
    data: {
      "circle_type": type,
      "curpage": page,
      "keyword": Obj.keyword
    },
    dataType: "json",
    success: function (res) {
      var data = res.datas;
      page += 1;
      nextpage = res.datas.is_nextpage;
      if(data == ""){
        return alert("没有更多数据了");
      }else{
        $("#tmp2").tmpl(data.list).appendTo($(".friend_box"));
      }
    }
  });
};

//还可以基window窗口（body）来添加滚动事件, (因为布局不同,所以在这里没效果，因为[上面是基于body中的某个元素来添加滚动事的])
$(window).scroll(function () {
  //当时滚动条离底部60px时开始加载下一页的内容
  if (($(window).height() + $(window).scrollTop() + 50) >= $(document).height()) {
    clearTimeout(timers);
    timers = setTimeout(function () {
      if (nextpage == 0 && is_nextpage_true == 1) {
        is_nextpage_true = 0;
        return alert("没有更多数据了");
      } else if (nextpage == 0) {
        return;
      } else {
        LoadingDataFn();
      }
    }, 300);
  }
});

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