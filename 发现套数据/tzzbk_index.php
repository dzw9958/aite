<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
    <title>帖子子版块首页</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="cache-control" content="no-siteapp">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
    <link rel="stylesheet" href="./templates/default/find/css/Public.css">
    <link rel="stylesheet" href="./templates/default/find/css/common.css">
    <link rel="stylesheet" href="./templates/default/find/css/tzzbk_index.css">
    <script src="./templates/default/find/js/rem.js"></script>
    <script src="./templates/default/find/js/jquery.min.js"></script>
    <script src="./templates/default/find/js/jquery.tmpl.js"></script>
    <script src="./templates/default/find/js/swiper.min.js"></script>
    <script src="./templates/default/find/js/common.js"></script>
    <script>
      queryObj();
      $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_cms_article&op=ClassIndex&class_id=" + Obj.class_id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        if(data.error == "请登录"){
          alert(data.error);
          return window.location.href = URL_pc + "wap/index.php?act=login";
        }
        $(".header_right").html($("#tmp1").tmpl(data));
        $(".info").html($("#tmp2").tmpl(data.class_info));
        if(data.class_info.is_like == 1){
          $(".info_inf a").addClass("on").html("已关注");
        }
        $(".hot_list").html($("#tmp3").tmpl(data.cms_article_hot_list));
        $(".card").html($("#tmp4").tmpl(data));
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
    <p>帖子子版块首页</p>
    <!-- <input type="text" name="search" placeholder="输入你要查找的内容"> -->
  </div>
  <div class="header_right">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a class="header_search" href="${keyword_search}"></a>
</script>
<!-- 顶部导航结束 -->
<!-- 帖子信息开始 -->
<div class="info header_top">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <div class="info_inf">
    <img src="${class_thumb}" title="${class_name}">
    <h1>${class_name}</h1>
    <a>+关注</a>
    <p>
      <span class="info_total">总共<i>${article_total}</i></span>
      <span class="info_essence">精华<i>${article_essence_total}</i></span>
      <span class="info_new">今日发帖<i>${article_curday_total}</i></span>
    </p>
  </div>
  <div class="info_text">
    <p>${class_desc}</p>
  </div>
</script>
<!-- 帖子信息结束 -->
<!-- 热门帖子开始 -->
<div class="hot">
  <div class="hot_title">
    <h1>热门</h1>
  </div>
  <ul class="hot_list">

  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp3">
  <li><a href="${url}">${article_title}</a></li>
</script>
<!-- 热门帖子结束 -->
<!-- 帖子列表开始 -->
<div class="card nav_bottom">
  
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
<!-- 帖子列表结束 -->
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
<script src="./templates/default/find/js/tzzbk_index.js"></script>
</body>
</html>