$(".portrait_list").on("click", "li", function(){
    var that = $(this);
    var imgSrc = that.attr("data-src");
    var imgTitle = that.find("p").text();
    that.addClass("on").siblings().removeClass("on");
    $(".portrait_window img").attr({src: imgSrc, title: imgTitle});
})