<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>活动详情页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/hd_detail.css">
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
      url: URL_wap + "index.php?act=find_activity&op=detail&id=" + Obj.id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        if(data.error == "请登录"){
          alert(data.error);
          return window.location.href = URL_pc + "wap/index.php?act=login";
        }
        if(data.activity_info.images_list.length  !== 0){
          $(".swiper-wrapper").html($("#tmp1").tmpl(data.activity_info));
          var mySwiper = new switchImg();
        }
        $(".summary").html($("#tmp2").tmpl(data.activity_info));
        $(".com_list").html($("#tmp3").tmpl(data.comment_list));
        // 内容的操作变换
        $(".join_consult a").attr('href', 'mqqwpa://im/chat?chat_type=wpa&uin=' + data.activity_info.QQ + '&version=1&src_type=web&web_src=oicqzone.com');

        if(data.activity_info.is_sign == 1){
          $(".join_online").addClass("on").html('<a href="' + data.find_join_url + "&id=" + Obj.id + '">报名中</a>')
        }else(
          $(".join_online").removeClass("on").html('<a>报名截止</a>')
        )

        if(data.hot_list == ""){
          $(".rec_list").remove();
        }else{
          $(".rec_list").html($("#tmp4").tmpl(data.hot_list));
        }
      }
    });
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_activity&op=detailContent&id=" + Obj.id,
      dataType: "json",
      dataFilter(data) {
        $(".illustrate_box").html(data);
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
    <p>活动详情</p>
  </div>
  <div class="header_right">
    <!-- <a class="header_share"></a> -->
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- banner开始 -->
<div class="swiper-container header_top">
  <div class="swiper-wrapper">

  </div>
  <div class="pagination"></div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  {{each(i, img) images_list}}
    <div class="swiper-slide">
      <a>
        <img src="${img}" alt="">
      </a>
    </div>
  {{/each}}
</script>
<!-- banner结束 -->
<!-- 活动简介开始 -->
<div class="summary">

</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <div class="summary_title">
    <h1>${title}</h1>
    <p class="summary_num">报名：<span>{{if now_sign_num}}${now_sign_num}{{else}}0{{/if}}人</span></p>
  </div>
  <div class="summary_box">
    <p class="summary_time"><i></i><span>${start_time} - ${end_time}</span></p>
    <p class="summary_location"><i></i><span>${area_info}${address}</span></p>
    <p class="summary_money"><i></i><span>￥${price}</span></p>
  </div>
</script>
<!-- 活动简介结束 -->
<!-- 活动说明开始 -->
<div class="illustrate">
  <h1>活动说明</h1>
  <div class="illustrate_box">

  </div>
</div>
<!-- 活动说明结束 -->
<!-- 评论开始 -->
<div class="com">
  <div class="com_title">
    <h1>评论</h1>
    <!-- <a href="#"><span>更多</span>&gt;</a> -->
  </div>
  <ul class="com_list">

  </ul>
  <div class="com_btn">
    <a>我来说说</a>
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp3">
  <li>
    <a class="com_name">
      <img src="${member_avatar}" title="${member_name}">
      <h2>${member_name}</h2>
    </a>
    <p class="com_text">${content}</p>
    <p class="com_other">
      <span class="com_time">${create_time}</span>
      <i class="com_speak"></i>
      <span class="com_likes
      {{if is_like == 1}}
        on
      {{/if}}
      " data-id="${id}">${like_num}</span>
    </p>
    <ol class="com_list_list">
      {{each parent_list}}
        <li>
          <a class="com_name">
            <img src="${member_avatar}" title="${member_name}">
            <h2>${member_name}</h2>
          </a>
          <p class="com_text">${content}</p>
          <p class="com_other">
            <span class="com_time">${create_time}</span>
            <span class="com_likes
            {{if is_like == 1}}
              on
            {{/if}}
            " data-id="${id}">${like_num}</span>
          </p>
        </li>
      {{/each}}
    </ol>
  </li>
</script>
<!-- 评论结束 -->
<!-- 评论窗口开始 -->
<div class="comment">
  <div class="comment_box">
    <form action="#" method="get" enctype="multipart/form-data">
      <textarea name="content" cols="" rows="" placeholder="评论" class="comment_text"></textarea>
      <input type="button" name="button" value="提交" class="comment_submit">
    </form>
  </div>
</div>
<!-- 评论窗口结束 -->
<!-- 您可能感兴趣开始 -->
<div class="rec nav_bottom">
  <div class="rec_title">
    <h1>您可能感兴趣</h1>
  </div>
  <ul class="rec_list">

  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp4">
  <li>
    <a href="${url}">
      <div class="rec_img">
        <img src="${thumb}" title="${title}">
        <span class="rec_label">${class_name}</span>
      </div>
      <h2>${title}</h2>
      <p class="rec_time">时间：<span>${start_time} - ${end_time}</span></p>
      <p class="rec_place">地点：<span>${city_name}</span></p>
      <p class="rec_cost">费用：<span>${price}</span></p>
    </a>
  </li>
</script>
<!-- 您可能感兴趣结束 -->
<!-- 活动报名开始 -->
<ul class="join">
  <li class="join_consult"><a href="mqqwpa://im/chat?chat_type=wpa&uin=574201314&version=1&src_type=web&web_src=oicqzone.com" target="_blank">在线咨询</a></li>
  <li class="join_online on"><a href="./templates/default/find/hd_join.php">报名中</a></li>
</ul>
<!-- 活动报名结束 -->
<script src="./templates/default/find/js/hd_detail.js"></script>
</body>

</html>