//区块链行业需要的六大安全能力切换开始
var solution_i = $(".solution_sub .on").index();
var solution_i_max = $(".solution_sub li").length - 1;

function jump(x) {
    solution_i = solution_i + x;
    if (solution_i > solution_i_max || solution_i < 0) {
        return solution_i = solution_i - x;
    }
    $(".solution_list").css("left", solution_i * -750 / 75 + "rem");
    $(".solution_sub li").eq(solution_i).addClass("on").siblings().removeClass("on");
}
$(".solution_window").on("touchstart", function (e) {
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