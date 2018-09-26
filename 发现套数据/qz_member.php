<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>群组成员</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/qz_member.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    queryObj();
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_circle&op=member&id=" + Obj.id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        $(".member_list").html($("#tmp1").tmpl(data.circle_member_list));
        $(".join").html($("#tmp2").tmpl(data));
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
    <p>群组成员</p>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 成员列表开始 -->
<div class="member">
  <ul class="member_list header_top">
    
  </ul>
</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <li>
    <a href="./templates/default/find/pyq_index.html">
      <img src="${member_avatar}" title="${member_name}">
      <p>${member_name}</p>
    </a>
  </li>
</script>
<!-- 成员列表结束 -->
<!-- 底部悬浮开始 -->
<div class="join">
  <a href="./templates/default/find/qz_join.html">加入群组</a>
</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <a href="${join_url}" class="join_btn">申请加入群组</a>
</script>
<!-- 底部悬浮结束 -->
<script src="./templates/default/find/js/qz_member.js"></script>
</body>
</html>