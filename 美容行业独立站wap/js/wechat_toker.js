//营销内容传播方式多种多样切换
var i_one = $(".marketing_sub .on").index();
var i_one_max = $(".marketing_sub li").length - 1;

function jumpOne(x){
    i_one = i_one + x;
    if(i_one > i_one_max || i_one < 0 ){
        return i_one = i_one - x;
    };
    $(".marketing_list").css("left", i_one * -730 / 75 + "rem");
    $(".marketing_sub li").eq(i_one).addClass("on").siblings().removeClass("on");
}

$(".marketing_box").on("touchstart", function(e){
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

//大数据分析潜在客户画像切换
var i_two = $(".portrait_list .on").index();
var i_two_max = $(".portrait_list li").length - 1;

function jumpTwo(x){
    i_two = i_two + x;
    if(i_two > i_two_max || i_two < 0 ){
        return i_two = i_two - x;
    };
    $(".portrait_imglist").css("left", i_two * -750 / 75 + "rem");
    $(".portrait_list li").eq(i_two).addClass("on").siblings().removeClass("on");
}

$(".portrait_list").on("click", "li", function(){
    var that = $(this);
    i_two = that.index();
    $(".portrait_imglist").css("left", i_two * -750 / 75 + "rem");
    that.addClass("on").siblings().removeClass("on");
})

$(".portrait_window").on("touchstart", function(e){
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
            jumpTwo(-1);
        }else if(pullDeltaX < -80){
            //左滑执行的代码
            jumpTwo(1);
        }
    })
})
