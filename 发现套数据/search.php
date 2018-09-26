<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>搜索页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/search.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find&op=search",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        // console.log(data);
        $(".list").html($("#tmp1").tmpl(data.searct_list));
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
    <input type="text" name="search" placeholder="请输入搜索内容">
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 列表按钮开始 -->
<ul class="list">
  
</ul>
<script type="text/x-jquery-tmpl" id="tmp1">
  <li><a data-href="${url}">${name}</a></li>
</script>
<!-- 列表按钮结束 -->
<script src="./templates/default/find/js/search.js"></script>
</body>
</html>