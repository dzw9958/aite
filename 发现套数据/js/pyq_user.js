/* 下拉加载更多 */
var page = 1;
var timers = null;

//加载数据
var LoadingDataFn = function () {
  var dom = '';
  for (var i = 0; i < 3; i++) {
    dom += '<li>';
    dom += '<span><b>03</b>9月</span>';
    dom += '<img src="./img/img.png" alt="">';
    dom += '<h2>还是要努力赚钱的，至少遇到自己喜欢的东西可以毫不犹豫地买下了。还是要努力赚钱的，至少遇到自己喜欢的东西可以毫不犹豫地买下了。...</h2>';
    dom += '<p>共三张</p>';
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