//创建变量
var key = "";
var type = 1;

var page = 2;
var timers = null;

//切换分类
$(".type_list").on("click", "li", function(){
  var that = $(this);
  type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
  page = 1;
  $(".group_list").empty();
  LoadingDataFn();
})

// 点击搜索
$(".type_submit").on("click", function(){
  var input = $(".type_search input");
  key = input.val();
  page = 1;
  $(".group_list").empty();
  LoadingDataFn();
})

//加载数据
var LoadingDataFn = function () {
  $.ajax({
    type: "get",
    url: "http://aitecc.com/mobile/index.php?act=find_circle&op=index",
    data: {
      "keyword": key,
      "orderType": type,
      "curpage": page
    },
    dataType: "json",
    success: function (res) {
      var data = res.datas;
      if(data.error){
        return alert(data.error);
      }else{
        page += 1;
        nextpage = res.datas.is_nextpage;
        $("#tmp3").tmpl(data).appendTo($(".group_list"));
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
      if (nextpage == 0) {
        return alert("没有更多数据了");
      } else {
        LoadingDataFn();
      }
    }, 300);
  }
});