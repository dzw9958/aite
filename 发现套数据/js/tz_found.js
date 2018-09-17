var classify2;
var classify = [];

$(".found").attr("action", URL_wap + "index.php?act=find_cms_article&op=create");

// 获取分类
$.ajax({
  type: "get",
  url: URL_wap + "index.php?act=find_cms_article&op=GetClass",
  dataType: "json",
  success: function (res) {
    var data = res.datas.list;
    for (var i = 0; i < data.length; i++) {
      var str = "" + data[i].class_id;
      classify[str] = data[i].class_name;
    }
    classify = classify.notempty();
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
  var title = $(".found_title input").val();
  var text = $(".found_text textarea").val();
  var image = $(".found_img input").val();
  if (classify2 == undefined) {
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
    ajaxSubmit();
  }
})

/**
 * 扩展Array方法, 去除数组中空白数据
 */
Array.prototype.notempty = function() {
  var arr = [];
  this.map(function(val, index) {
      //过滤规则为，不为空串、不为null、不为undefined，也可自行修改
      if (val !== "" && val != undefined) {
          arr.push(val);
      }
  });
  return arr;
}

// 使用插件选择
var mobileSelect = function () {
  this.name = new MobileSelect({
    trigger: '#trigger1',
    title: '分类',
    wheels: [{
      data: classify
    }],
    position: [0], //初始化定位 打开时默认选中的哪个 如果不填默认为0
    transitionEnd: function (indexArr, data) {
      //console.log(data);
    },
    callback: function (indexArr, data) {
      // console.log(data);
      $(".found_classify input").val(data);
      classify2 = data;
    }
  });
}