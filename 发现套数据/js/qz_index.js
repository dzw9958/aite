/* 下拉加载更多 */
var type = $(".type_list .on").data("type");
var page = 1;
var timers = null;

$(".type_list").on("click", "li", function(){
  var that = $(this);
  type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
})

//加载数据
var LoadingDataFn = function () {
  var dom = '';
  for (var i = 0; i < 3; i++) {
    dom += '<li>';
    dom += '<a class="group_inf" href="#">';
    dom += '<img src="./img/head-group.png" alt="">';
    dom += '<h2>第二届CMF会议交流群</h2>';
    dom += '<p>本群共96人</p>';
    dom += '</a>';
    dom += '<a class="group_join" href="#">加入群组</a>';
    dom += '<div class="group_box">';
    dom += '<h3>群组介绍</h3>';
    dom += '<p>探讨CMF行业趋势，交流行业信息。</p>';
    dom += '<h3>入群需知</h3>';
    dom += '<p>探讨CMF行业趋势，交流行业信息。</p>';
    dom += '<h3>本群组人员</h3>';
    dom += '<div class="group_img">';
    dom += '<img src="./img/head-one.png" alt="">';
    dom += '<img src="./img/head-one.png" alt="">';
    dom += '<img src="./img/head-one.png" alt="">';
    dom += '<img src="./img/head-one.png" alt="">';
    dom += '<img src="./img/head-one.png" alt="">';
    dom += '</div>';
    dom += '</div>';
    dom += '</li>';
  }
  // $('.group_list').append(dom);
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