<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>发现首页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">

  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/index.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find&op=index",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        // console.log(data);
        $(".header_right").html($("#tmp1").tmpl(data));
        $(".swiper-wrapper").html($("#tmp2").tmpl(data.adv_list));
        var mySwiper = new switchImg();
        $(".classify").html($("#tmp3").tmpl(data.nav_list));
        $(".activity").html($("#tmp4").tmpl(data));
        $(".friend").html($("#tmp5").tmpl(data));
        $(".group").html($("#tmp6").tmpl(data));
        $(".card").html($("#tmp7").tmpl(data));
        $(".vip_banner").html($("#tmp8").tmpl(data.adv_buttom));
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
    <p>发现</p>
    <!-- <input type="text" name="search" placeholder="输入你要查找的内容"> -->
  </div>
  <div class="header_right">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a class="header_search" href="${find_search}"></a>
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
    <a href="${adv_pic_url}">
      <img src="${adv_pic}" title="${adv_title}">
      <p>${adv_title}</p>
    </a>
  </li>
</script>
<!-- 分类结束 -->
<!-- 热门活动开始 -->
<div class="activity">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp4">
  <div class="common_title">
    <h1>热门活动</h1>
    <a href="${hot_activity_list_url}"><span>更多</span>&gt;</a>
  </div>
  <div class="activity_window">
    <div class="activity_box">
      <ul class="activity_list">
        {{each hot_activity_list}}
          <li>
            <a href="${url}">
              <div class="activity_img">
                <img src="${thumb}" title="${title}">
                <p class="activity_place">地点：<span>${city_name}</span></p>
                <span class="activity_label">${class_name}</span>
              </div>
              <h2>${title}</h2>
              <p class="activity_time">时间：<span>${start_time} - ${end_time}</span></p>
              <p class="activity_cost">费用：<span>${price}</span></p>
            </a>
          </li>
        {{/each}}
      </ul>
    </div>
  </div>
  <div class="common_btn">
    <a href="${hot_activity_create_url}">我要发活动</a>
  </div>
</script>
<!-- 热门活动结束 -->
<!-- 最新朋友动态开始 -->
<div class="friend">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp5">
  <div class="friend">
  <div class="common_title">
    <h1>最新朋友动态</h1>
    <a href="${theme_list_url}"><span>更多</span>&gt;</a>
  </div>
  <div class="friend_box">
    {{each(i, list) theme_list}}
      <div class="friend_trends
      {{if i == 0}}
        friend_first
      {{/if}}">
        <a class="friend_inf" href="${member_index_url}">
          <img src="${member_avatar}" alt=${member_name}>
          <h2>${member_name}</h2>
          <p>${theme_addtime}</p>
        </a>
        <div class="friend_text">
          <p>{{html theme_name}}</p>
        </div>
        <ul class="friend_img">
          {{each(ii, img) thumb_list}}
            <li style="background: url(${img});">
            </li>
          {{/each}}
        </ul>
        <div class="friend_speak">
          <i class="friend_btn"></i>
          <span class="friend_likes
          {{if is_like == 1}}
            on
          {{/if}}
          " data-id="${theme_id}">${theme_likecount}</span>
        </div>
        {{if reply_info}}
          <ul class="friend_com">
            <li>
              <a href="${theme_news_url}"><span>${reply_info.member_name}</span>：${reply_info.reply_content}</a>
            </li>
          </ul>
        {{/if}}
      </div>
    {{/each}}
  </div>
  <div class="common_btn">
    <a href="${theme_list_create_url}">我要发动态</a>
  </div>
</script>
<!-- 最新朋友动态结束 -->
<!-- 9/25增加点击图片看大图开始 -->
<div class="mask swiper-container2">
  
</div>
<!-- 9/25增加点击图片看大图结束 -->
<!-- 最新群组开始 -->
<div class="group">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp6">
  <div class="common_title">
    <h1>最新群组</h1>
    <a href="${circle_list_url}"><span>更多</span>&gt;</a>
  </div>
  <ul class="group_list">
    {{each circle_list}}
      <li class="group_first">
        <a class="group_inf" href="${url}">
          <img src="${circle_masterid_avatar}" title="${circle_name}">
          <h2>${circle_name}</h2>
          <p>本群共${circle_mcount}人</p>
        </a>
        <a class="group_join" href="${join_url}">加入群组</a>
        <div class="group_box">
          {{if circle_desc}}
            <h3>群组介绍</h3>
            <p>${circle_desc}</p>
          {{/if}}
          {{if circle_notice}}
            <h3>入群需知</h3>
            <p>${circle_notice}</p>
          {{/if}}
          <h3>本群组人员</h3>
          <div class="group_img">
            {{each member_list}}
              <a><img src="${member_avatar}" title="${member_name}"></a>
            {{/each}}
          </div>
        </div>
      </li>
    {{/each}}
  </ul>
</script>
<!-- 最新群组结束 -->
<!-- 热门帖子开始 -->
<div class="card">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp7">
  <div class="common_title">
    <h1>热门帖子分类</h1>
    <a href="${cms_class_list_url}"><span>更多</span>&gt;</a>
  </div>
  <ul class="card_type">
    {{each cms_class_list}}
      <li>
        <a href="${adv_pic_url}">
          <img src="${adv_pic}" title="${adv_title}">
          <p>${adv_title}</p>
        </a>
      </li>
    {{/each}}
  </ul>
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
  <div class="common_btn">
    <a href="${cms_article_create_url}">我要发帖子</a>
  </div>
</script>
<!-- 热门帖子结束 -->
<!-- vip-banner开始 -->
<div class="vip_banner nav_bottom">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp8">
  <a href="${adv_pic_url}">
    <img src="${adv_pic}" title="${adv_title}">
  </a>
</script>
<!-- vip-banner结束 -->
<!-- 评论窗口开始 -->
<div class="comment">
  <div class="comment_box">
    <form action="#" method="get" enctype="multipart/form-data">
      <textarea name="reply_content" cols="" rows="" placeholder="评论" class="comment_text"></textarea>
      <input type="button" name="submit" value="提交" class="comment_submit">
    </form>
  </div>
</div>
<!-- 评论窗口结束 -->
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
<script src="./templates/default/find/js/index.js"></script>
</body>
</html>