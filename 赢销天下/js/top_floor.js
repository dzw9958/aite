//切换显示和隐藏
var showList = $(".keen_switch");
$(".keen_btn li").hover(function(){
    var that = $(this);
    var i = that.index();
    that.addClass("on").siblings().removeClass("on")
    showList.find("li").eq(i).addClass("on").siblings().removeClass("on");
})