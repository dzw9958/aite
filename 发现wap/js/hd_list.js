// 切换显示分类
var list = $(".switch_box");
var item = $(".switch_btn li");

item.on("click", function () {
  var that = $(this);
  var index = that.index();
  if (that.hasClass("on")) {
    that.removeClass("on");
    list.fadeOut().find(".switch_list").eq(index).hide();
  } else {
    that.addClass("on").siblings().removeClass("on")
    list.fadeIn().find(".switch_list").eq(index).show().siblings().hide();
  }
})

// 点击隐藏分类
list.on("click touchstart", function () {
  var that = $(this);
  that.fadeOut();
  item.removeClass("on");
})
// 分类的切换
var type = 0;
var time = 0;

$(".switch_list").on("click touchstart", "li", function(e){
  e.stopPropagation();
  var that = $(this);
  var index = that.parent().index();
  if(e.handleObj.type !== "click"){
    
  }else if(index == 0){
    type = that.data("type");
  }else if(index == 1){
    time = that.data("time");
  }
  list.fadeOut();
  item.removeClass("on");
  console.log(type, time);
})


/* 下拉加载更多 */
var page = 1;
var timers = null;

//加载数据
var LoadingDataFn = function () {
  var dom = '';
  for (var i = 0; i < 3; i++) {
    dom += '<li>';
    dom += '<a href="#">';
    dom += '<div class="main_img">';
    dom += '<img src="./img/img.png" alt="">';
    dom += '<span class="main_label">展览</span>';
    dom += '</div>';
    dom += '<div class="main_text">';
    dom += '<h2>2017第一届中国新材料与新包装融合</h2>';
    dom += '<p class="main_time">时间：<span>2017-09-29 12:15</span></p>';
    dom += '<p class="main_place">地点：<span>深圳</span></p>';
    dom += '<p class="main_cost">费用：<span>1800</span></p>';
    dom += '</div>';
    dom += '</a>';
    dom += '</li>';
  }
  $('.main_list').append(dom);
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