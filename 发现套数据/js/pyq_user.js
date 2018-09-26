$(".top_contain").on("change", "input", function () {
  var url = "#";
  ajaxSubmit(url);
  window.location.reload();
})

/* 下拉加载更多 */
var is_nextpage_true = 1;
var page = 2;
var timers = null;

//加载数据
var LoadingDataFn = function () {
  $.ajax({
    type: "get",
    url: URL_wap + "index.php?act=find&op=member_index",
    data: {
      // "keyword": key,
      "member_id": Obj.member_id,
      "curpage": page
    },
    dataType: "json",
    success: function (res) {
      var data = res.datas;
      page += 1;
      nextpage = res.datas.is_nextpage;
      $("#tmp2").tmpl(data.list).appendTo($(".main_list"));
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