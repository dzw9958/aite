var mask = $(".mask");

// 遮罩层开启
$(".flow_btn a").on("click", function(){
    $("html").css("overflow", "hidden");
    mask.show();
})

// 遮罩层关闭
$(".popup .close").on("click", function(){
    $("html").css("overflow", "auto");
    mask.hide();
})

// 提交事件
$(".popup .submit").on("click", function(){
    var str = "";
    var num = 0;

    var data = [
        {
            name: $("#name").val(),
            phone: $("#phone").val(),
            number: $("#number").val(),
            purpose: $("#purpose").val(),
        },
        {
            name: $("#name").val(),
            phone: $("#phone").val(),
            number: $("#number").val(),
            purpose: $("#purpose").val(),
        }
    ]
    console.log(data)

    var retname = /^[\u4E00-\u9FA5A-Za-z]+$/;
    var retphone = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
    var retnumber = /\D/g;

    if(name == ""){
        str += "姓名不能为空！"
    }else if(!retname.test(name)){
        str += "姓名不正确！"
    }else{
        num += 1;
    }

    if(phone == ""){
        str += "电话不能为空！"
    }else if(!retphone.test(phone)){
        str += "电话不正确！"
    }else{
        num += 1;
    }

    if(number == ""){
        str += "申请数量（颗）不能为空！"
    }else if(retnumber.test(number)){
        str += "申请数量（颗）只能为数字！"
    }else{
        num += 1;
    }

    if(!purpose == "" && !retnumber.test(purpose)){
        str += "认领目的不能为数字！"
    }else{
        num += 10;
    }

    if(num == 3 || num ==13){
        alert("请等待工作人员与你联系！");
    }else{
        alert(str);
    }
})
