<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>帖子详情页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/tz_detail.css">
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
      url: URL_wap + "index.php?act=find_cms_article&op=detail&article_id=" + Obj.id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        $(".detail_inf").html($("#tmp1").tmpl(data.article_info));
        $(".rec_list").html($("#tmp2").tmpl(data));
        $(".vip_banner").html($("#tmp4").tmpl(data.article_info));
        $(".comment form").attr({"action": URL_wap+ "index.php?act=find_cms_article&op=Addcomment&article_id=" + data.article_info.article_id})
      }
    });
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_cms_article&op=detailContent&article_id=" + Obj.id,
      dataType: "json",
      dataFilter(data){
        $(".detail_box").html(data);
      }
    });
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_cms_article&op=Comment&article_id=" + Obj.id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        // console.log(data);
        $(".com_list").html($("#tmp3").tmpl(data.comment_info));
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
    <p>帖子详情页</p>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 帖子详情开始 -->
<div class="detail header_top">
  <div class="detail_inf">
    
  </div>
  <div class="detail_box">
    
  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <h1>${article_title}</h1>
  <p>
    <span class="detail_time">${article_publish_time}</span>
    <span class="detail_eye">${article_click}</span>
  </p>
</script>
<!-- 帖子详情结束 -->
<!-- 推荐阅读开始 -->
<div class="rec">
  <div class="rec_title">
    <h1>推荐阅读</h1>
  </div>
  <ul class="rec_list">
    
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  {{each(i, data) new_list}}
    {{if i==0}}
      <li class="rec_first">
        <a href="${url}">
          <h2>${article_title}</h2>
          <div class="rec_img">
            <img src="${article_image}" title="${article_title}">
            {{each(ii, img) article_image_all}}
              {{if ii<2}}
                <img src="${img}">
              {{/if}}
            {{/each}}
          </div>
          <p>
            {{if is_top==1}}
              <span class="rec_heat">置顶</span>
            {{/if}}
            <span class="rec_time">${article_publish_time}</span>
            <span class="rec_author">${article_author}</span>
            <span class="rec_com">${article_comment_count}</span>
            <span class="rec_eye">${article_click}</span>
          </p>
        </a>
      </li>
    {{/if}}
    {{if i>0}}
      <li>
        <a href="${url}">
          <div class="rec_text"">
            <h2>${article_title}</h2>
            <p>
              <span class="rec_time">${article_publish_time}</span>
              <span class="rec_author">${article_author}</span>
              <span class="rec_com">${article_comment_count}</span>
              <span class="rec_eye">${article_click}</span>
            </p>
          </div>
          <div class="rec_img">
            <img src="${article_image}" title="${article_title}">
          </div>
        </a>
      </li>
    {{/if}}
  {{/each}}
</script>
<!-- 推荐阅读结束 -->
<!-- 评论开始 -->
<div class="com">
  <div class="com_title">
    <h1>全部评论</h1>
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
      <img src="${member_avatar}" alt="">
      <h2>${member_name}</h2>
    </a>
    <p class="com_text">${comment_message}</p>
    <p class="com_other">
      <span class="com_time">${comment_time}</span>
      <span class="com_likes
      {{if is_exist == 1}}
        on
      {{/if}}
      " data-id="${comment_id}">${comment_up}</span>
    </p>
  </li>
</script>
<!-- 评论结束 -->
<!-- 评论窗口开始 -->
<div class="comment">
  <div class="comment_box">
    <form action="#" method="get" enctype="multipart/form-data">
      <textarea name="comment_message" cols="" rows="" placeholder="评论" class="comment_text"></textarea>
      <input type="button" name="submit" value="提交" class="comment_submit">
    </form>
  </div>
</div>
<!-- 评论窗口结束 -->
<!-- vip-banner开始 -->
<div class="vip_banner">
  <a>
    <img src="./templates/default/find/img/banner.png" alt="">
  </a>
</div>
<script type="text/x-jquery-tmpl" id="tmp4">
  <a>
    <img src="${article_image}" title="${article_title}">
  </a>
</script>
<!-- vip-banner结束 -->
<script src="./templates/default/find/js/tz_detail.js"></script>
</body>
</html>