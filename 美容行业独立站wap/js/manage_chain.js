//功能优势板块切换
var i_one = $(".function_list .on").index();
var i_one_max = $(".function_list li").length - 1;
//滑动切换
function jumpOne(x){
    i_one = i_one + x;
    if(i_one > i_one_max || i_one < 0 ){
        return i_one = i_one - x;
    };
    $(".function_list").css("left", i_one * -625 / 75 + "rem");
    $(".function_list li").eq(i_one).addClass("on").siblings().removeClass("on");
}

$(".function_contain").on("touchstart", function(e){
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
            jumpOne(-1);
        }else if(pullDeltaX < -80){
            //左滑执行的代码
            jumpOne(1);
        }
    })
})