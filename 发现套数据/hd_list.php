<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>活动列表页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/hd_list.css">
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
      url: URL_wap + "index.php?act=find_activity&op=list",
      data: {
        "class_id": 0,
        "last_time": 0,
        // "pagesize": 8,
        "curpage": 1,
        "keyword": Obj.keyword
      },
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        nextpage = data.is_nextpage;
        $(".header .header_right").html($("#tmp1").tmpl(data));
        $(".switch_type").append($("#tmp2").tmpl(data.class_list));
        $(".main_list").html($("#tmp3").tmpl(data.list));
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
    <p>活动列表页</p>
  </div>
  <div class="header_right">

  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a href="${activity_create_url}" class="header_text">创建活动</a>
</script>
<!-- 顶部导航结束 -->
<!-- 切换列表开始 -->
<div class="switch">
  <ul class="switch_btn">
    <li><span>活动分类</span></li>
    <li><span>活动时间</span></li>
  </ul>
</div>
<div class="switch_box">
  <ul class="switch_list switch_type">
    <li class="on" data-type="0">全部</li>

  </ul>
  <ul class="switch_list switch_time">
    <li class="on" data-time="0">全部</li>
    <li data-time="1">近一周</li>
    <li data-time="2">近半月</li>
    <li data-time="3">近一个月</li>
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <li data-type="${class_id}">${class_name}</li>
</script>
<!-- 切换列表结束 -->
<!-- 主体列表开始 -->
<div class="main">
  <ul class="main_list">
    
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp3">
  <li>
    <a href="${url}">
      <div class="main_img">
        <img src="${thumb}" title="${title}">
        <span class="main_label">${class_name}</span>
      </div>
      <div class="main_text">
        <h2>${title}</h2>
        <p class="main_time">时间：<span>${start_time} - ${end_time}</span></p>
        <p class="main_place">地点：<span>${city_name}</span></p>
        <p class="main_cost">费用：<span>${price}</span></p>
      </div>
    </a>
  </li>
</script>
<!-- 主体列表结束 -->
<script src="./templates/default/find/js/hd_list.js"></script>
</body>
</html>