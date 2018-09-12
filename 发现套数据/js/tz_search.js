$(".header_text").on("click", function(){
  var search = $(".header_center input").val();
  alert(search);
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
    dom += '<div class="main_text"">';
    dom += '<h2>在区块链做技术，除了高薪他们还想对抗人性之恶</h2>';
    dom += '<p>';
    dom += '<span class="main_time">08/25</span>';
    dom += '<span class="main_author">CEO观点</span>';
    dom += '<span class="main_com">1200</span>';
    dom += '<span class="main_eye">1200</span>';
    dom += '</p>';
    dom += '</div>';
    dom += '<div class="main_img">';
    dom += '<img src="./img/img.png" alt="">';
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