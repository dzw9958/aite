<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>朋友圈消息</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/pyq_news.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    queryObj();
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_theme&op=GetCircle_threply&theme_id=" + Obj.theme_id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        console.log(data);
        $(".main_list").html($("#tmp1").tmpl(data.list));
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
    <p>朋友圈消息</p>
  </div>
  <div class="header_right">
    <a class="header_text">刷新</a>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 主体列表开始 -->
<div class="main header_top">
  <ul class="main_list">
    
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <li>
    <a href="${member_index_url}">
      <img src="${member_avatar}" title="${member_name}">
      <h2>${member_name}</h2>
      <span>${reply_addtime}</span>
    </a>
    <p>${reply_content}</p>
  </li>
</script>
<!-- 主体列表结束 -->
<script src="./templates/default/find/js/pyq_news.js"></script>
</body>
</html>