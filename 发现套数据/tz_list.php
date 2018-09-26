<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>帖子列表页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/tz_list.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    queryObj();
    var nextpage;
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_cms_article&op=list",
      data: {
        "orderType": 1,
        // "pagesize": 8,
        "curpage": 1,
        "keyword": Obj.keyword
      },
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        nextpage = data.is_nextpage;
        $(".header_right").html($("#tmp1").tmpl(data));
        $(".main_list").html($("#tmp2").tmpl(data));
      }
    });
  </script>
</head>
<body>
<!-- 顶部导航开始 -->
<div class="header">
  <div class="header_left">
    <a href="javascript:history.back(-1)"></a>
  </div>
  <div class="header_center">
    <p>帖子列表页</p>
    <!-- <input type="text" name="search" placeholder="输入你要查找的内容"> -->
  </div>
  <div class="header_right">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a class="header_search" href="${keyword_search}"></a>
</script>
<!-- 顶部导航结束 -->
<!-- 切换列表开始 -->
<div class="switch">
  <ul class="switch_list">
    <li class="on" data-type="1">最新</li>
    <li data-type="2">热门</li>
    <li data-type="3">精华</li>
    <li data-type="4">关注</li>
  </ul>
</div>
<!-- 切换列表结束 -->
<!-- 主体列表开始 -->
<div class="main">
  <ul class="main_list">
    
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  {{each(i, list) list}}
    <li>
      <a href="${url}">
        <div class="main_text"">
          <h2>${article_title}</h2>
          <p>
            <span class="main_time">${article_publish_time}</span>
            <span class="main_author">${article_publisher_name}</span>
            <span class="main_com">${article_comment_count}</span>
            <span class="main_eye">${article_click}</span>
          </p>
        </div>
        <div class="main_img">
          <img src="${article_image}" title="${article_title}">
        </div>
      </a>
    </li>
  {{/each}}
</script>
<!-- 主体列表结束 -->
<script src="./templates/default/find/js/tz_list.js"></script>
</body>
</html>