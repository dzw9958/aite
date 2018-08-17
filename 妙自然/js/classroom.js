var list = $(".classroom_switch").find("ul");
$(".classroom_btn li").on("click", "button", function(){
    var that = $(this).parent();
    var index = that.index();
    that.addClass("active").siblings().removeClass("active");
    list.eq(index).addClass("active").siblings().removeClass("active")
})