//运营管理解决方案点击切换开始
$(".operate .operate_choice li").on("click",function(){
    var i = $(this).index();
    $(this).addClass("on").siblings().removeClass("on")
        .parent().next().find("ul").css("left", i * -1084);
})
//运营管理解决方案点击切换结束