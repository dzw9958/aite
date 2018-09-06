// 点赞功能
var box = $(".friend_box");
var mark = $(".comment");
var text = $(".comment_text");
box.on("click", ".friend_likes", function(){
  var that = $(this);
  if(that.hasClass("on")){
    return alert("你已经点过赞了！");
  }else{
    $(this).addClass("on");
    return alert("点赞成功！");
  }
})

// 点击评论弹出评论框获取/失去焦点
box.on("click", ".friend_btn", function(){
  console.log(1);
  mark.fadeIn();
  text.focus();
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
$(".comment_submit").on("click touchstart", function(e){
  e.stopPropagation();
  var value = text.val();
  if(value == ""){
    return alert("评论不能为空！");
  }else{
    text.val("");
    return alert("评论成功！");
  }
})

/* 下拉加载更多 */
var type = $(".header_center .on").data("type");
var page = 1;
var timers = null;

$(".header_center").on("click","span", function(){
  var that = $(this);
  type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
})

//加载数据
var LoadingDataFn = function () {
  var dom = '';
  for (var i = 0; i < 3; i++) {
    dom += '<div class="friend_trends">';
    dom += '<a class="friend_inf" href="#">';
    dom += '<img src="./img/head-one.png" alt="">';
    dom += '<h2>青青子衿悠悠我心</h2>';
    dom += '<p>08-17 10:33</p>';
    dom += '</a>';
    dom += '<div class="friend_text">';
    dom += '<p>我是谁？我为什么在这里？我是谁？我为什么在这里？我是谁？我为什么在这里？我是谁？我为什么在这里？我是谁？我为什么在这里？我是谁？我为什么在这里？</p>';
    dom += '</div>';
    dom += '<ul class="friend_img">';
    dom += '<li>';
    dom += '<img src="./img/img.png" alt="">';
    dom += '</li>';
    dom += '</ul>';
    dom += '<div class="friend_speak">';
    dom += '<i class="friend_btn"></i>';
    dom += '<span class="friend_likes">1</span>';
    dom += '</div>';
    dom += '<ul class="friend_com">';
    dom += '<li>';
    dom += '<p><a href="#">你是我的小绵羊</a>：感谢您的支持！感谢您的支持！感谢您的支持！感谢您的支持！感谢您的支持！感谢您的支持！感谢您的支持！感谢您的支持！</p>';
    dom += '</li>';
    dom += '<li>';
    dom += '<p><a href="#">你是我的小绵羊</a>：感谢您的支持！</p>';
    dom += '</li>';
    dom += '</ul>';
    dom += '</div>';
  }
  $('.friend_box').append(dom);
};

//初始化， 第一次加载
$(document).ready(function () {
  LoadingDataFn();
});

//还可以基window窗口（body）来添加滚动事件, (因为布局不同,所以在这里没效果，因为[上面是基于body中的某个元素来添加滚动事的])
$(window).scroll(function () {
  //当时滚动条离底部60px时开始加载下一页的内容
  if (($(window).height() + $(window).scrollTop() + 50) >= $(document).height()) {
    clearTimeout(timers);
    timers = setTimeout(function () {
      page++;
      console.log("第" + page + "页");
      LoadingDataFn();
    }, 300);
  }
});