//区块链行业需要的六大安全能力切换开始
var safety_i = $(".safety_sub .on").index();
var safety_i_max = $(".safety_sub li").length - 1;

function jump(x) {
    safety_i = safety_i + x;
    if (safety_i > safety_i_max || safety_i < 0) {
        return safety_i = safety_i - x;
    }
    $(".safety_box").css("left", safety_i * -730 / 75 + "rem");
    $(".safety_sub li").eq(safety_i).addClass("on").siblings().removeClass("on");
}
$(".safety_window").on("touchstart", function (e) {
    //touchstart事件
    var that = $(this);
    var startX = e.originalEvent.changedTouches[0].clientX; //手指触碰屏幕的x坐标
    var pullDeltaX = 0;
    that.on("touchmove", function (e) {
        //touchmove事件
        var X = e.originalEvent.changedTouches[0].clientX; //手指移动后所在的坐标
        pullDeltaX = X - startX; //移动后的位移
        if (!pullDeltaX) {
            return;
        }
        e.preventDefault(); //阻止手机浏览器默认事件
    });
    that.on("touchend", function (e) {
        //touchend事件
        that.off("touchmove touchend"); //解除touchmove和touchend事件 
        //所要执行的代码
        e.stopPropagation();

        //判断移动距离是否大于30像素
        if (pullDeltaX > 80) {
            //右滑执行代码
            jump(-1);
        } else if (pullDeltaX < -80) {
            //左滑执行的代码
            jump(1);
        }
    })
})