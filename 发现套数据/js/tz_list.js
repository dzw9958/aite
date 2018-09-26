$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_cms_article&op=index");
// 创建变量
var is_nextpage_true = 1;
var type = 1;

var page = 2;
var timers = null;

$(".switch_list").on("click", "li", function () {
  var that = $(this);
  type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
  page = 1;
  is_nextpage_true = 1;
  $(".main_list").empty();
  LoadingDataFn();
})

//加载数据
var LoadingDataFn = function () {
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find_cms_article&op=list",
    data: {
      "orderType": type,
      // "pagesize": 8,
      "curpage": page,
      "keyword": Obj.keyword
    },
    dataType: "json",
    success: function (res) {
      page += 1;
      nextpage = res.datas.is_nextpage;
      var list = res.datas.list;
      var str = '';
      for (var i = 0; i < list.length; i++) {
        str += '<li>';
        str += '<a href="' + list[i].url + '">';
        str += '<div class="main_text"">';
        str += '<h2>' + list[i].article_title + '</h2>';
        str += '<p>';
        str += '<span class="main_time">' + list[i].article_publish_time + '</span>';
        str += '<span class="main_author">' + list[i].article_publisher_name + '</span>';
        str += '<span class="main_com">' + list[i].article_comment_count + '</span>';
        str += '<span class="main_eye">' + list[i].article_click + '</span>';
        str += '</p>';
        str += '</div>';
        str += '<div class="main_img">';
        str += '<img src="' + list[i].article_image + '" title="' + list[i].article_title + '">';
        str += '</div>';
        str += '</a>';
        str += '</li>';
      }
      $(".main_list").append(str);
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