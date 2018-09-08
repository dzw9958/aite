var classify2, start, end;
// 创建选择数组
var classify = ['聚会', '运动', '展览', '交友会', '讨论会', '论坛', '交流', '其他'];
var year = [];
var month = [];
var day = [];

var increment = function (arr, start, num, postfix) {
  for (var i = 0; i < num; i++) {
    arr[i] = start + postfix;
    start += 1;
  }
}

increment(year, 2018, 10, '年');
increment(month, 1, 12, '月');
increment(day, 1, 31, '号');

// 使用插件选择
var mobileSelect1 = new MobileSelect({
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
    classify2 = data;
  }
});

var mobileSelect2 = new MobileSelect({
  trigger: '#trigger2',
  title: '开始时间',
  wheels: [{
      data: year
    },
    {
      data: month
    },
    {
      data: day
    }
  ],
  position: [0, 0, 0, 0, 0],
  transitionEnd: function (indexArr, data) {
    //console.log(data);
  },
  callback: function (indexArr, data) {
    console.log(data);
    start = data;
  }
});

var mobileSelect3 = new MobileSelect({
  trigger: '#trigger3',
  title: '结束时间',
  wheels: [{
      data: year
    },
    {
      data: month
    },
    {
      data: day
    }
  ],
  position: [0, 0, 0, 0, 0],
  transitionEnd: function (indexArr, data) {
    //console.log(data);
  },
  callback: function (indexArr, data) {
    console.log(data);
    end = data;
  }
});

// 预览图片
$(".sketch_img input").on("change", function () {
  var that = $(this);
  // 获取这次上传的图片
  var obj = that[0];
  var file = obj.files[0];
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
    console.log(21);
    $(".sketch_img img").attr("src", e.target.result);
  }
  reader.readAsDataURL(file);
})

// 点击提交事件
$(".release button").on("click", function () {
  var str = "";
  var theme = $(".info_theme input").val();
  var cost = $(".info_cost input").val();
  var place = $(".info_place input").val();
  var text = $(".sketch_text textarea").val();
  if (theme == "") {
    str += " 主题不能为空！";
  }
  if (classify2 == undefined) {
    str += " 请选择分类！";
  }
  if (start == undefined) {
    str += " 请选择开始时间! ";
  }
  if (end == undefined) {
    str += " 请选择结束时间! ";
  }
  if (cost == "") {
    str += " 费用不能为空! ";
  }
  if (place == "") {
    str += " 地点不能为空! ";
  }
  if (str !== "") {
    console.log(theme, classify2, start, end, cost, place);
    alert(str);
  } else {
    // 暂时没有获取图片上传的东西
    alert(theme, classify2, start, end, cost, place, text);
  }
})