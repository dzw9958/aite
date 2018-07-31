$(document).ready(function(){
    //头顶显示隐藏二维码
    var code = $(".top_contain .top_hide");
    $(".top_contain .top_btn").hover(function(){
        code.show();
    }, function(){
        code.hide();
    });
    code.hover(function(){
        code.show();
    }, function(){
        code.hide();
    });

    //banner轮播
    jQuery(".banner_contain").slide({
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true
    });

    //键盘并非奢想
    jQuery(".health_wheel").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 3
    });
});
