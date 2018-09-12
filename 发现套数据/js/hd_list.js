// 创建变量
var type = 0;
var time = 0;

var page = 2;
var timers = null;

var mask = $(".switch_box");
var btn = $(".switch_btn li");

// 切换显示分类
btn.on("click", function () {
  var that = $(this);
  var index = that.index();
  if (that.hasClass("on")) {
    that.removeClass("on");
    mask.fadeOut().find(".switch_list").eq(index).hide();
  } else {
    that.addClass("on").siblings().removeClass("on")
    mask.fadeIn().find(".switch_list").eq(index).show().siblings().hide();
  }
})

// 点击隐藏分类
mask.on("click touchstart", function () {
  var that = $(this);
  that.fadeOut();
  btn.removeClass("on");
})

// 切换分类
$(".switch_list").on("click touchstart", "li", function (e) {
  e.stopPropagation();
  var that = $(this);
  var index = that.parent().index();
  if (e.handleObj.type !== "click") {
    return;
  } else if (index == 0) {
    type = that.data("type");
  } else if (index == 1) {
    time = that.data("time");
  }
  mask.fadeOut();
  btn.removeClass("on");
  page = 1;
  $(".main_list").empty();
  LoadingDataFn();
})

//加载数据
var LoadingDataFn = function () {
  $.ajax({
    type: "get",
    url: "http://aitecc.com/mobile/index.php?act=find_activity&op=list",
    data: {
      "class_id": type,
      "last_time": time,
      // "pagesize": 8,
      "curpage": page
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
        str += '<div class="main_img">';
        str += '<img src="' + list[i].thumb + '" title="' + list[i].title + '">';
        str += '<span class="main_label">' + list[i].class_name + '</span>';
        str += '</div>';
        str += '<div class="main_text">';
        str += '<h2>' + list[i].title + '</h2>';
        str += '<p class="main_time">时间：<span>' + list[i].start_time + ' - ' + list[i].end_time + '</span></p>';
        str += '<p class="main_place">地点：<span>' + list[i].city_name + '</span></p>';
        str += '<p class="main_cost">费用：<span>' + list[i].price + '</span></p>';
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
  if (($(window).height() + $(window).scrollTop() + 60) >= $(document).height()) {
    clearTimeout(timers);
    timers = setTimeout(function () {
      if (nextpage == 0) {
        return alert("没有更多数据了");
      } else {
        LoadingDataFn();
      }
    }, 300);
  }
});