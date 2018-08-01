$(document).ready(function(){
    //banner轮播
    jQuery(".banner_contain").slide({
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true
    });

    //健康并非奢想
    jQuery(".health_wheel").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 3
    });
});
