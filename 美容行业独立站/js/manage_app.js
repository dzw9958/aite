$(".intelligent_switch").on("click", "h1", function(){
    var that = $(this).parent();
    var i = that.index();
    that.addClass("on").siblings().removeClass("on");
    $(".intelligent_list").css("left", i * -1200);
})