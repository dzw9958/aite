<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>创建群组</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/qz_found.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_circle&op=create",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        if(data.error == "请登录"){
          alert(data.error);
          return window.location.href = URL_pc + "wap/index.php?act=login";
        }
      }
    });
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_circle&op=theme_img",
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        $(".found_list").html($("#tmp1").tmpl(data));
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
    <p>创建群组</p>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- 创建表单开始 -->
<form class="found header_top" action="#" method="post" enctype="multipart/form-data">
  <div class="found_img">
    <div class="found_window">
      <div class="found_box">
        <ul class="found_list">
          
        </ul>
      </div>
    </div>
    <p>选择群组背景图片</p>
    <input type="text" name="circle_back_img">
  </div>
  <div class="found_name">
    <input type="text" name="circle_name" placeholder="填写群名称"/>
  </div>
  <div class="found_label">
    <input type="text" name="c_tag" placeholder="填写群标签（多个标签以，分隔）">
  </div>
  <div class="found_condition">
    <input type="text" name="c_pursuereason" placeholder="填写加群条件">
  </div>
  <div class="found_summary">
    <textarea name="c_desc" placeholder="填写加群介绍"></textarea>
  </div>
  <div class="found_submit">
    <input type="button" value="创建群组">
  </div>
</form>
<script type="text/x-jquery-tmpl" id="tmp1">
  {{each(i, data) adv_list}}
    <li data-input="${adv_pic_value}" 
    {{if i==0}}
      class="on"
    {{/if}}>
      <img src="${adv_pic}" title="${adv_title}">
    </li>
  {{/each}}
</script>
<!-- 创建表单结束 -->
<script src="./templates/default/find/js/qz_found.js"></script>
</body>
</html>