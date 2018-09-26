<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
  <title>群组详情页</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="cache-control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
  <link rel="stylesheet" href="./templates/default/find/css/Public.css">
  <link rel="stylesheet" href="./templates/default/find/css/common.css">
  <link rel="stylesheet" href="./templates/default/find/css/qz_detail.css">
  <script src="./templates/default/find/js/rem.js"></script>
  <script src="./templates/default/find/js/jquery.min.js"></script>
  <script src="./templates/default/find/js/jquery.tmpl.js"></script>
  <script src="./templates/default/find/js/swiper.min.js"></script>
  <script src="./templates/default/find/js/common.js"></script>
  <script>
    queryObj();
    $.ajax({
      type: "get",
      url: URL_wap + "index.php?act=find_circle&op=detail&id=" + Obj.id,
      dataType: "json",
      success: function (res) {
        var data = res.datas;
        $(".top_contain").html($("#tmp1").tmpl(data.circle_info));
        $(".info.one").html($("#tmp2").tmpl(data));
        $(".info.two").html($("#tmp3").tmpl(data.circle_info));
        $(".join").html($("#tmp4").tmpl(data));
      }
    });
  </script>
</head>
<body>
<!-- 顶部信息栏开始 -->
<div class="top_contain">

</div>
<script type="text/x-jquery-tmpl" id="tmp1">
  <div class="top" style="background-image: url(${circle_back_img})">
    <div class="top_header">
      <a href="javascript:history.back(-1)" class="top_left"></a>
    </div>
    <div class="top_inf">
      <img src="${circle_master_avatar}" title="${circle_name}">
      <h1>${circle_name}</h1>
      <p>${circle_desc}</p>
    </div>
  </div>
</script>
<!-- 顶部信息栏结束 -->
<!-- 群组信息一开始 -->
<div class="info one">

</div>
<script type="text/x-jquery-tmpl" id="tmp2">
  <div class="info_member">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>成员</p>
    </div>
    <a href="${circle_info.circle_member}" class="info_num">本群成员<span>${circle_info.member_count}</span></a>
    <div class="info_img">
      {{each circle_member_list}}
        <a>
          <img src="${member_avatar}" title="${member_name}">
        </a>
      {{/each}}
    </div>
  </div>
  <div class="info_notice">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>公告</p>
    </div>
    <div class="info_text">
        <p>${circle_info.circle_notice}</p>
    </div>
  </div>
  <!-- <div class="info_activity">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>活动</p>
    </div>
    <div class="info_text">
      <p>最佳六排！最佳六排！最佳六排！最佳六排！最佳六排！最佳六排！最佳六排！最佳六排！最佳六排！最佳六排！</p>
    </div>
  </div> -->
  <div class="info_label">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>标签</p>
    </div>
    {{each(i, label) circle_info.circle_tag_arr}}
      {{if label !== ""}}
        <span>${label}</span>
      {{/if}}
    {{/each}}
  </div>
</script>
<!-- 群组信息一结束 -->
<!-- 群组信息二开始 -->
<div class="info two">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp3">
  <div class="info_condition">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>群条件</p>
    </div>
    <div class="info_text">
      <p>${circle_pursuereason}</p>
    </div>
  </div>
  <div class="info_owner">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>群主</p>
    </div>
    <a>
      <img src="${circle_master_avatar}" alt="">
    </a>
  </div>
  <div class="info_time">
    <div class="info_icon">
      <img src="./templates/default/find/img/icon/group_1.png" alt="">
      <p>时间</p>
    </div>
    <div class="info_text">
      <p>${circle_addtime}</p>
    </div>
  </div>
</script>
<!-- 群组信息二结束 -->
<!-- 申请加入开始 -->
<div class="join">
  
</div>
<script type="text/x-jquery-tmpl" id="tmp4">
  <a href="${join_url}" class="join_btn">申请加入群组</a>
</script>
<!-- 申请加入结束 -->
<script src="./templates/default/find/js/qz_detail.js"></script>
</body>
</html>