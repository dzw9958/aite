<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>发布朋友圈</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/mobileSelect.css">
  <link rel="stylesheet" href="./templates/default/find/css/pyq_found.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/mobileSelect.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_theme&op=create",
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
    <p>发布朋友圈</p>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 发布表单开始 -->
<form action="#" method="post" enctype="multipart/form-data">
  <div class="found header_top">
    <div class="found_text">
      <textarea name="theme_content" placeholder="请输入你想跟大家分享的内容..."></textarea>
    </div>
    <ul class="found_img">
      <li class="found_btn">
        <img src="./templates/default/find/img/add.png" alt="">
        <input type="file" name="image_upload1" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload2" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload3" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload4" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload5" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload6" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload7" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload8" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="image_upload9" accept="image/jpeg,image/jpg,image/png,image/svg">
      </li>
    </ul>
    <div class="found_submit">
      <input type="button" value="确定发布">
    </div>
  </div>
</form>
<!-- 发布表单结束 -->
<script src="./templates/default/find/js/pyq_found.js"></script>
</body>
</html>