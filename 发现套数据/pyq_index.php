<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>朋友圈首页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/pyq_index.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    queryObj();
    var nextpage;
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_theme&op=index",
      data: {
        "circle_type": "web",
        "curpage": 1,
        "keyword": Obj.keyword
      },
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        nextpage = data.is_nextpage;
        $(".header_two .header_right").html($("#tmp1").tmpl(data));
        $(".friend_box").html($("#tmp2").tmpl(data.list));
      }
    });
  </script>
</head>
<body>
<!-- 顶部导航开始 -->
<div class="header_two">
  <div class="header_left">
    <a href="javascript:history.back(-1)"></a>
  </div>
  <div class="header_center">
    <span class="on" data-type="web">行业圈</span>
    <span data-type="app">好友圈</span>
  </div>
  <div class="header_right">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a href="${find_theme_create_url}" class="header_text">创建动态</a>
</script>
<!-- 顶部导航结束 -->
<!-- 最新朋友动态开始 -->
<div class="friend header_top">
  <div class="friend_box">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <div class="friend_trends">
    <a class="friend_inf" href="${find_member_index_url}">
      <img src="${member_avatar}" title="${member_name}">
      <h2>${member_name}</h2>
      <p>${theme_addtime}</p>
    </a>
    <div class="friend_text">
      <p>{{html theme_name}}</p>
    </div>
    <ul class="friend_img">
      {{each(i, img) thumb_list}}
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
</script>
<!-- 最新朋友动态结束 -->
<!-- 9/25增加点击图片看大图开始 -->
<div class="mask swiper-container2">
  
</div>
<!-- 9/25增加点击图片看大图结束 -->
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
<script src="./templates/default/find/js/pyq_index.js"></script>
</body>
</html>