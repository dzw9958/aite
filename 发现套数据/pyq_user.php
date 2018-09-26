<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>朋友圈个人中心</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/pyq_user.css">
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
      url: URL_wap + "index.php?act=find&op=member_index&member_id=" + Obj.member_id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        if(data.error == "请登录"){
          alert(data.error);
          return window.location.href = URL_pc + "wap/index.php?act=login";
        }
        nextpage = data.is_nextpage;
        $(".top_contain").html($("#tmp1").tmpl(data.member_info));
        $(".top_header a").attr("href", URL_pc + "wap/index.php?act=find_theme&op=index");
        $("form").attr("action", URL_wap + "index.php?act=find&op=Addmember_album");
        $(".main_list").html($("#tmp2").tmpl(data.list));
      }
    });
  </script>
</head>
<body>
<!-- 顶部信息栏开始 -->
<div class="top_contain">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <div class="top"
    {{if member_album != ""}}
      {{each(i, img) member_album}}
        {{if i==0}}
          style="background-image: url(${img});"
        {{/if}}
      {{/each}}
    {{/if}}
  >
    <div class="top_header">
      <a href="javascript:history.back(-1)" class="top_left"></a>
    </div>
    {{if is_member == 1}}
      <form action="#" method="post" enctype="multipart/form-data">
        <input type="file" name="member_album[]" accept="image/jpeg,image/jpg,image/png,image/svg" class="top_input">
      </form>
    {{/if}}
    <div class="top_inf">
      <img src="${member_avatar}" title="${member_name}">
      <h1>${member_name}</h1>
    </div>
  </div>
</script>
<!-- 顶部信息栏结束 -->
<!-- 主体列表开始 -->
<div class="main">
  <ul class="main_list">
    
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <li>
    <span><b>${theme_addtime_d}</b>${theme_addtime_m}月</span>
    <a href="${theme_news_url}">
      {{if thumb_list}}
        {{each(i, img) thumb_list}}
          {{if i == 0}}
            <img src="${img}">
          {{/if}}
        {{/each}}
      {{/if}}
      <h2>{{html theme_name}}</h2>
      {{if thumb_list_num > 0}}
        <p>${thumb_list_num}</p>
      {{/if}}
    </a>
  </li>
</script>
<!-- 主体列表结束 -->
<script src="./templates/default/find/js/pyq_user.js"></script>
</body>
</html>