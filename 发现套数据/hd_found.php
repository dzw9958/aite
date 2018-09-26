<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>创建活动</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/mobileSelect.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/hd_found.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.form.min.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/mobileSelect.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_activity&op=create",
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
    <p>创建活动</p>
  </div>
</div>
<!-- 顶部导航结束 -->
<!-- form表单盒子包里面的内容开始 -->
<form action="#" method="post" enctype="multipart/form-data">
  <!-- 活动信息开始 -->
  <div class="info header_top">
    <div class="info_theme">
      <span>主题</span>
      <input type="text" name="title" placeholder="请填写活动主题"/>
    </div>
    <div class="info_classify">
      <span>分类</span>
      <p id="trigger1"></p>
      <input type="hidden" name="class_id"/>
    </div>
    <div class="info_start">
      <span>开始时间</span>
      <p id="trigger2"></p>
      <input type="hidden" name="start_time"/>
    </div>
    <div class="info_end">
      <span>结束时间</span>
      <p id="trigger3"></p>
      <input type="hidden" name="end_time"/>
    </div>
    <div class="info_cost">
      <span>费用</span>
      <input type="number" name="price" placeholder="活动费用"/>
    </div>
    <div class="info_place">
      <span>地点</span>
      <input type="text" name="address" placeholder="xx市xx区xx路xx大厦xxx"/>
    </div>
    <div class="info_qq">
      <span>QQ</span>
      <input type="text" name="QQ" placeholder="QQ号以作在线咨询之用"">
    </div>
  </div>
  <!-- 活动信息结束 -->
  <!-- 活动文字及图片开始 -->
  <div class="sketch">
    <div class="sketch_text">
      <textarea name="content" placeholder="请介绍活动内容"></textarea>
    </div>
    <div class="sketch_box">
      <div class="sketch_img sketch_cover">
        <img src="./templates/default/find/img/add.png" alt="">
        <input type="file" name="thumb" accept="image/jpeg,image/jpg,image/png,image/svg">
      </div>
      <h2>上传封面图</h2>
      <p>图片比例为1:1，图片大小不超过2M。</p>
    </div>
    <div class="sketch_box">
      <div class="sketch_img sketch_carousel">
        <img src="./templates/default/find/img/add.png" alt="">
        <input type="file" name="banner1" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="banner2" accept="image/jpeg,image/jpg,image/png,image/svg">
        <input type="file" name="banner3" accept="image/jpeg,image/jpg,image/png,image/svg">
      </div>
      <h2>上传活动详情图</h2>
      <p>图片比例为2:1，图片最多为三张，图片大小不超过2M。</p>
    </div>
    <ul class="sketch_show">

    </ul>
  </div>
  <!-- 活动文字及图片结束 -->
  <!-- 底部发布开始 -->
  <div class="release">
    <input type="button" value="我要发布">
  </div>
  <!-- 底部发布结束 -->
</form>
<!-- form表单盒子包里面的内容结束 -->
<!-- 文字说明开始 -->
<div class="explain">
  <h2>发布活动说明</h2>
  <p>1、活动截止报名时间，系统默认为活动开始前三小时。</p>
  <p>2、如活动涉及费用，采取现场缴费的形式，平台不做代收费，仅可报名。</p>
  <p>3、当线下活动报名人数达一定人数时，经审核真是有效后，艾特可发放一定活动补助，用以活动经费。</p>
  <p>4、活动发起后进入后台审核，会在三个工作日内处理。</p>
  <p>5、活动通过审核后不可修改，只可取消活动。</p>
</div>
<!-- 文字说明结束 -->
<script src="./templates/default/find/js/hd_found.js"></script>
</body>
</html>