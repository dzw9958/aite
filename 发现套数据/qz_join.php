<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>申请验证</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/qz_join.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_circle&op=join",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        if(data.error == "请登录"){
          alert(data.error);
          return window.location.href = URL_pc + "wap/index.php?act=login";
        }
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
    <p>申请验证</p>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 加群表单开始 -->
<form class="join header_top" action="#" method="post" enctype="multipart/form-data">
  <input type="hidden" name="circle_id">
  <div class="join_reason">
    <h1>加群理由</h1>
    <textarea name="c_desc" placeholder="请确保自己符合加群条件，再说说加群理由"></textarea>
  </div>
  <div class="join_submit">
    <input type="button" value="确认">
  </div>
</form>
<!-- 加群表单结束 -->
<script src="./templates/default/find/js/qz_join.js"></script>
</body>
</html>