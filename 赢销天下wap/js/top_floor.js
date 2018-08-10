var switchList = $(".keen_switch");
$(".keen_btn li").on("click", function(){
    var that = $(this);
    var i = that.index();
    that.addClass("on").siblings().removeClass("on");
    switchList.find("li").eq(i).addClass("on").siblings().removeClass("on");
})