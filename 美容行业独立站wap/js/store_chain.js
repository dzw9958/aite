//美容行业连锁门店解决方案核心价值切换
var i = $(".core_sub .on").index();
var i_max = $(".core_sub li").length - 1;

function jump(x){
    i = i + x;
    if(i > i_max || i < 0 ){
        return i = i- x;
    };
    $(".core_list").css("left", i * -750 / 75 + "rem");
    $(".core_sub li").eq(i).addClass("on").siblings().removeClass("on");
}

$(".core_box").on("touchstart", function(e){
    //touchstart事件
    var that = $(this);
    var startX = e.originalEvent.changedTouches[0].clientX; //手指触碰屏幕的x坐标
    var pullDeltaX = 0;
    that.on("touchmove", function(e){
        //touchmove事件
        var X = e.originalEvent.changedTouches[0].clientX;//手指移动后所在的坐标
        pullDeltaX = X - startX;//移动后的位移
        if(!pullDeltaX){
            return;
        }
        e.preventDefault();//阻止手机浏览器默认事件
    });
    that.on("touchend", function(e){
        //touchend事件
        that.off("touchmove touchend");//解除touchmove和touchend事件 
        //所要执行的代码
        e.stopPropagation();

        //判断移动距离是否大于30像素
        if(pullDeltaX > 80){
            //右滑执行代码
            jump(-1);
        }else if(pullDeltaX < -80){
            //左滑执行的代码
            jump(1);
        }
    })
})
