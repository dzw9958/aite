$(document).ready(function(){
    //banner轮播
    jQuery(".banner_contain").slide({
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true
    });

    $(".story_contain .story_btn").on("click", "li", function(){
        var that = $(this);
        that.addClass("on").siblings().removeClass("on");
    })
});
