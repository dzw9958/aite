$(".mobile_switch").on("click", "li", function(){
    var that = $(this);
    var imgSrc = that.attr("data-imgsrc");
    var imgTitle = that.find("p").text(); 
    that.parents(".mobile_right").find("li").removeClass("on");
    that.addClass("on");
    $(".mobile_left img").attr({src: imgSrc, title: imgTitle});
})