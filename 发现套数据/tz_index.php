<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>帖子首页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/tz_index.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_cms_article&op=index",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        // console.log(data);
        $(".header_right").html($("#tmp1").tmpl(data));
        $(".swiper-container .swiper-wrapper").html($("#tmp2").tmpl(data.adv_list));
        var mySwiper = new switchImg();
        $(".plate").html($("#tmp3").tmpl(data));
        var mySwiperTwo = new switchImgTwo();
        $(".card_box").html($("#tmp4").tmpl(data));
        $(".vip_banner").html($("#tmp5").tmpl(data.adv_buttom));
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
    <p>帖子首页</p>
    <!-- <input type="text" name="search" placeholder="输入你要查找的内容"> -->
  </div>
  <div class="header_right">

  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a class="header_search" href="${keyword_search}"></a>
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
<!-- 热门板块开始 -->
<div class="plate">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp3">
  <div class="plate_title">
    <h1>板块分类</h1>
  </div>
  <div class="swiper-container-two">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <ul class="plate_list">
          {{each(i, data) class_list}}
            <li>
              <a href="${url}">
                <img src="${class_thumb}" title="${class_name}">
                <p>${class_name}</p>
              </a>
            </li>
    {{if i!==class_list.length-1 && i%8== 7}}
        </ul>
      </div>
      <div class="swiper-slide">
        <ul class="plate_list">
    {{/if}}
          {{/each}}
        </ul>
      </div>
    </div>
    <div class="pagination-two"></div>
  </div>
  <div class="plate_btn">
    <a href="${find_cms_article_create_url}">我要发帖</a>
  </div>
</script>
<!-- 热门板块结束 -->
<!-- 热门帖子开始 -->
<div class="card">
  <ul class="card_type">
    <li class="on" data-type="1">最新</li>
    <li data-type="2">热门</li>
    <li data-type="3">精华</li>
    <li data-type="4">关注</li>
  </ul>
  <div class="card_box">

  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp4">
  <ul class="card_list">
    {{each(i, list) cms_article_list}}
      {{if i==0}}
        <li class="card_first">
          <a href="${url}">
            <h2>${article_title}</h2>
            <div class="card_img">
              <img src="${article_image}" title="${article_title}">
              {{each(ii, img) article_image_all}}
                {{if ii<2}}
                  <img src="${img}">
                {{/if}}
              {{/each}}
            </div>
            <p>
              {{if is_top==1}}
                <span class="card_heat">置顶</span>
              {{/if}}
              <span class="card_time">${article_publish_time}</span>
              <span class="card_author">${article_publisher_name}</span>
              <span class="card_com">${article_comment_count}</span>
              <span class="card_eye">${article_click}</span>
            </p>
          </a>
        </li>
      {{/if}}
      {{if i>0}}
        <li>
          <a href="${url}">
            <div class="card_text"">
              <h2>${article_title}</h2>
              <p>
                <span class="card_time">${article_publish_time}</span>
                <span class="card_author">${article_publisher_name}</span>
                <span class="card_com">${article_comment_count}</span>
                <span class="card_eye">${article_click}</span>
              </p>
            </div>
            <div class="card_img">
              <img src="${article_image}" title="${article_title}">
            </div>
          </a>
        </li>
      {{/if}}
    {{/each}}
  </ul>
  <div class="card_btn">
    <a href="${cms_article_list_url}">查看更多</a>
  </div>
</script>
<!-- 热门帖子结束 -->
<!-- vip-banner开始 -->
<div class="vip_banner nav_bottom">

</div>
<script type="text/x-jquery-tmpl" id="tmp5">
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
<script src="./templates/default/find/js/tz_index.js"></script>
</body>
</html>