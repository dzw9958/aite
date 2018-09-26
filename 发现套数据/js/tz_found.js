$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_cms_article&op=index");
// 创建变量和数组
var classify_name = [];
var classify_id = [];

$(".found").attr("action", URL_wap + "index.php?act=find_cms_article&op=create");

// 获取分类
$.ajax({
  type: "get",
  url: URL_wap + "index.php?act=find_cms_article&op=GetClass",
  dataType: "json",
  success: function (res) {
    var data = res.datas.list;
    for (var i = 0; i < data.length; i++) {
      classify_name[i] = data[i].class_name;
      classify_id[i] = data[i].class_id
    }
    var mobileSelect1 = mobileSelect();
  }
});

$(".found_btn input").on("change", function () {
  var that = $(this);
  that.parent().siblings().remove();
  // 获取这次上传的图片
  var obj = that[0];
  // 获取这次上传的图片的数量
  var fl = obj.files.length;
  for (var i = 0; i < fl; i++) {
    var file = obj.files[i];
    var reader = new FileReader();
    //读取文件过程方法  
    // reader.onloadstart = function (e) {  
    // 	console.log("开始读取....");  
    // }  
    // reader.onprogress = function (e) {  
    // 	console.log("正在读取中....");  
    // }  
    reader.onabort = function (e) {
      alert("中断读取....")
    }
    reader.onerror = function (e) {
      alert("读取异常....")
    }
    reader.onload = function (e) {
      var imgstr = '<li><img src="' + e.target.result + '"/></li>';
      $(".found_img").append(imgstr);
    }
    reader.readAsDataURL(file);
  }
})

// 提交事件
$(".found_submit input").on("click", function () {
  var str = "";
  var classify = $(".found_classify input").val();
  var title = $(".found_title input").val();
  var text = $(".found_text textarea").val();
  var image = $(".found_img input").val();
  if (classify == "") {
    str += " 请选择分类！";
  }
  if (title == "") {
    str += " 标题不能为空！"
  }
  if (text == "") {
    str += " 内容不能为空！";
  }
  if (image == "") {
    str += " 图片不能为空！";
  }
  if (str !== "") {
    return alert(str);
  } else {
    // alert("请等待！");
    var url = URL_pc + "wap/index.php?act=find_cms_article&op=index";
    ajaxSubmit(url);
  }
})

// 使用插件选择
var mobileSelect = function () {
  this.name = new MobileSelect({
    trigger: '#trigger1',
    title: '分类',
    wheels: [{
      data: classify_name
    }],
    position: [0], //初始化定位 打开时默认选中的哪个 如果不填默认为0
    transitionEnd: function (indexArr, data) {
      //console.log(data);
    },
    callback: function (indexArr, data) {
      // console.log(data);
      $(".found_classify input").val(classify_id[indexArr]);
    }
  });
}