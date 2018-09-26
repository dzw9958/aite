$(".header_left a").attr("href", URL_pc + "wap/index.php?act=find_activity&op=index");
// 创建变量和数组
var classify_name = [];
var classify_id = [];
var year = [];
var month = [];
var day = [];
var hour = [];

// 创建现在的时间和初始化选择数组
var newtime;
var selected = [];

// 日期阀门
var start_true = false;
var end_true = false;

$("form").attr("action", URL_wap + "index.php?act=find_activity&op=create");

// 获取分类或者为数组赋值
increment(year, 2018, 10, '年');
increment(month, 1, 12, '月');
increment(day, 1, 31, '日');
increment(hour, 1, 24, '时');

// 获取现在的时间和初始化选择
newTimeAjax();

$.ajax({
  type: "get",
  url: URL_wap + "index.php?act=find_activity&op=class",
  async: "false",
  dataType: "json",
  success: function (res) {
    var data = res.datas.class_list;
    for (var i = 0; i < data.length; i++) {
      classify_name[i] = data[i].class_name;
      classify_id[i] = data[i].class_id;
    }
    var mobileSelect1 = mobileSelect();
  }
});

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
      // console.log(indexArr);
      $(".info_classify input").val(classify_id[indexArr]);
    }
  });
}

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
    },
    {
      data: hour
    }
  ],
  position: selected,
  transitionEnd: function (indexArr, data) {
    //console.log(data);
  },
  callback: function (indexArr, data) {
    // console.log(data);
    start_true = isTrue(data, start_true);
    data = convert(data);
    $(".info_start input").val(data);
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
    },
    {
      data: hour
    }
  ],
  position: selected,
  transitionEnd: function (indexArr, data) {
    // console.log(data);
  },
  callback: function (indexArr, data) {
    // console.log(data);
    end_true = isTrue(data, end_true);
    // console.log(data);
    data = convert(data);
    $(".info_end input").val(data);
  }
});

// 预览封面图片
$(".sketch_cover input").on("change", function () {
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
    $(".sketch_cover img").attr("src", e.target.result);
  }
  reader.readAsDataURL(file);
})
// 预览轮播图片
$(".sketch_carousel input").eq(0).show().nextAll().hide();
$(".sketch_carousel input").on("change", function () {
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
    var imgstr = '<li><img src="' + e.target.result + '"/></li>';
    $(".sketch_show").append(imgstr)
  }
  reader.readAsDataURL(file);
  that.hide().next().show();
})

// 点击提交事件
$(".release input").on("click", function () {
  var str = "";
  var theme = $(".info_theme input").val();
  var classify_select = $(".info_classify input").val();
  var start_time = $(".info_start input").val();
  var end_time = $(".info_end input").val();
  var cost = $(".info_cost input").val();
  var place = $(".info_place input").val();
  var qq = $(".info_qq input").val();
  var img = $(".sketch_img input").val();
  if (theme == "") {
    str += " 主题不能为空！";
  }
  if (classify_select == "") {
    str += " 请选择分类！";
  }
  if (start_time == "") {
    str += " 请选择开始时间! ";
  } else if (start_true == false) {
    str += " 请选择正确的开始时间！ ";
  }
  if (end_time == "") {
    str += " 请选择结束时间! ";
  } else if (end_true == false) {
    str += " 请选择正确的结束时间！ ";
  }
  if(start_time <= newtime){
    str += "开始时间不能小于等于现在时间！";
  }
  // if (start_time >= end_time) {
  //   str += " 开始时间不能大于等于结束时间！ ";
  // }
  if (cost == "") {
    str += " 费用不能为空! ";
  }
  if (place == "") {
    str += " 地点不能为空! ";
  }
  if (qq == "") {
    str += " QQ不能为空！ ";
  }
  if(img == ""){
    str += " 图片不能为空！ ";
  }
  if (str !== "") {
    return alert(str);;
  } else {
    // 暂时没有获取图片上传的东西
    var url = URL_pc + "wap/index.php?act=find_activity&op=index";
    ajaxSubmit(url);
  }
})



// 加工日期数组
function increment(arr, start, num, postfix) {
  for (var i = 0; i < num; i++) {
    arr[i] = start + postfix;
    start += 1;
  }
}

// 日期数组转2018-12-11 12:00:00
function convert(arr) {
  var str = "";
  for (i = 0; i < arr.length; i++) {
    if (i < 2) {
      str += arr[i].substring(0, arr[i].length - 1) + "-";
    } else if (i == 2) {
      str += arr[i].substring(0, arr[i].length - 1) + " ";
    } else if (i == arr.length - 1) {
      str += arr[i].substring(0, arr[i].length - 1) + ":00:00";
    }
  }
  return str;
}

// 日期判断是否正确
function isTrue(arr, arr_true) {
  var year = arr[0].substring(0, arr[0].length - 1) * 1;
  var month = arr[1].substring(0, arr[1].length - 1) * 1;
  var day = arr[2].substring(0, arr[2].length - 1) * 1;
  if (day < 29) {
    return arr_true = true;
  } else if (day == 29 && month == 2) {
    if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
      return arr_true = true;
    } else {
      alert("该年是平年！");
      return arr_true = false;
    }
  } else if (day > 29 && month == 2) {
    alert("二月份没有" + day);
    return arr_true = false;
  } else if (day == 31) {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      alert("该月没有31！");
      return arr_true = false;
    }
  }
}

function newTimeAjax() {
  $.ajax({
    async: false,
    type: "POST", //get 方式猎豹有问题
    success: function (result, status, xhr) {
      var date = new Date(xhr.getResponseHeader("Date"));
      var newArr = [];
      newArr.push(date.getFullYear() + "年");
      newArr.push(date.getMonth() + 1 + "月");+
      newArr.push(date.getDate() + "日");
      newArr.push(date.getHours() + "时");
      newtime = convert(newArr);
      selected.push(year.indexOf(newArr[0]));
      selected.push(month.indexOf(newArr[1]));
      selected.push(day.indexOf(newArr[2]));
      selected.push(hour.indexOf(newArr[3]));
    }
  });
}