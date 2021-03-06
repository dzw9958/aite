<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>群组首页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/qz_index.css">
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
      url: URL_wap + "index.php?act=find_circle&op=index",
      data: {
        "orderType": 1,
        "curpage": 1,
        "keyword": Obj.keyword
      },
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        nextpage = data.is_nextpage;
        $(".header .header_right").html($("#tmp1").tmpl(data));
        $(".group_list").html($("#tmp3").tmpl(data));
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
    <p>群组首页</p>
  </div>
  <div class="header_right">

  </div>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <a href="${circle_create}" class="header_text">创建群组</a>
</script>
<!-- 顶部导航结束 -->
<!-- 悬浮搜索框和分类开始 -->
<div class="type">
  <div class="type_search">
    <input type="text" name="search" placeholder="输入你要查找的内容">
    <i class="type_submit"></i>
  </div>
  <ul class="type_list">
    <li class="on" data-type="1">最新</li>
    <li data-type="2">热门</li>
    <li data-type="3">我的群组</li>
  </ul>
</div>
<!-- 悬浮搜索框和分类结束 -->
<!-- 群组列表开始 -->
<div class="group">
  <ul class="group_list">

  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp3">
  {{if list}}
    {{each list}}
      <li>
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
              <img src="${member_avatar}" title="${member_name}">
            {{/each}}
          </div>
        </div>
      </li>
    {{/each}}
  {{/if}}
</script>
<!-- 最新群组结束 -->
<script src="./templates/default/find/js/qz_index.js"></script>
</body>
</html>