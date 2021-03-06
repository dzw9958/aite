<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>活动首页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/hd_index.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_activity&op=index",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        $(".header .header_right").html($("#tmp1").tmpl(data));
        $(".swiper-wrapper").html($("#tmp2").tmpl(data.adv_list));
        var mySwiper = new switchImg();
        $(".classify").html($("#tmp3").tmpl(data.class_list));
        $(".activity.hot").html($("#tmp4").tmpl(data));
        $(".activity.official").html($("#tmp5").tmpl(data));
        $(".vip_banner").html($("#tmp6").tmpl(data.adv_buttom));
      }
    })
  </script>
</head>
<body>
<!-- 顶部导航开始 -->
<div class="header">
  <div class="header_left">
    <a href="javascript:history.back(-1)"></a>
  </div>
  <div class="header_center">
    <p>活动首页</p>
  </div>
  <div class="header_right">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a href="${activity_create_url}" class="header_text">创建活动</a>
</script>
<!-- 顶部导航结束 -->
<!-- banner开始 -->
<div class="swiper-container header_top">
    <div class="swiper-wrapper">
        
    </div>
    <div class="pagination"></div>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <div class="swiper-slide">
    <a href="${adv_pic_url}">
      <img src="${adv_pic}" title="${adv_title}">
    </a>
  </div>
</script>
<!-- banner结束 -->
<!-- 分类开始 -->
<ul class="classify">
  
</ul>
<script type="text/x-jquery-tmpl" id="tmp3">
  <li>
    <a href="${url}">
      <img src="${thumb}" title="${class_name}">
      <p>${class_name}</p>
    </a>
  </li>
</script>
<!-- 分类结束 -->
<!-- 热门活动开始 -->
<div class="activity hot">

</div>
<script type="text/x-jquery-tmpl" id="tmp4">
  <div class="common_title">
    <h1>热门活动</h1>
    <a href="${hot_list_url}"><span>更多</span>&gt;</a>
  </div>
  <div class="activity_window">
    <div class="activity_box">
      <ul class="activity_list">
        {{each hot_list}}
          <li>
            <a href="${url}">
              <div class="activity_img">
                <img src="${thumb}" title="${title}">
                <span class="activity_label">${class_name}</span>
              </div>
              <h2>${title}</h2>
              <p class="activity_time">时间：<span>${start_time} - ${end_time}</span></p>
              <p class="activity_place">地点：<span>${city_name}</span></p>
              <p class="activity_cost">费用：<span>${price}</span></p>
            </a>
          </li>
        {{/each}}
      </ul>
    </div>
  </div>
</script>
<!-- 热门活动结束 -->
<!-- 官方活动开始 -->
<div class="activity official">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp5">
  <div class="common_title">
    <h1>官方活动</h1>
    <a href="${off_list_url}}"><span>更多</span>&gt;</a>
  </div>
  <div class="activity_window">
    <div class="activity_box">
      <ul class="activity_list">
        {{each off_list}}
          <li>
            <a href="${url}">
              <div class="activity_img">
                <img src="${thumb}" title="${title}">
                <span class="activity_label">${class_name}</span>
              </div>
              <h2>${title}</h2>
              <p class="activity_time">时间：<span>${start_time} - ${end_time}</span></p>
              <p class="activity_place">地点：<span>${city_name}</span></p>
              <p class="activity_cost">费用：<span>${price}</span></p>
            </a>
          </li>
        {{/each}}
      </ul>
    </div>
  </div>
</script>
<!-- 官方活动结束 -->
<!-- vip-banner开始 -->
<div class="vip_banner nav_bottom">

</div>
<script type="text/x-jquery-tmpl" id="tmp6">
  <a href="${adv_pic_url}">
    <img src="${adv_pic}" title="${adv_title}">
  </a>
</script>
<!-- vip-banner结束 -->
<!-- 底部导航开始 -->
<ul class="nav">
  <li>
    <a href="#">
      <i class="nav_ia"></i>
      <p>首页</p>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="nav_ib"></i>
      <p>商城</p>
    </a>
  </li>
  <li class="active">
    <a href="http://aitecc.com/wap/index.php?act=find">
      <i class="nav_ic"></i>
      <p>发现</p>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="nav_id"></i>
      <p>消息</p>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="nav_ie"></i>
      <p>我的</p>
    </a>
  </li>
</ul>
<!-- 底部导航结束 -->
<script src="./templates/default/find/js/hd_index.js"></script>
</body>
</html>