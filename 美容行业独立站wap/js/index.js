//专为美业打造的系列产品板块切换
var i_one = $(".products_jump .on").index();
var i_one_max = $(".products_jump li").length - 1;
// var timer = setInterval(jump, 5000);
function jumpOne(x){
    i_one = i_one + x;
    if(i_one > i_one_max || i_one < 0 ){
        return i_one = i_one - x;
    };
    $(".products_box").css("left", i_one * -750 / 75 + "rem");
    $(".products_jump li").eq(i_one).addClass("on").siblings().removeClass("on");
}

$(".products_box").on("touchstart", function(e){
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

//运营管理解决方案切换
var i_two = $(".operate_jump .on").index();
var i_two_max = $(".operate_jump li").length - 1;
function jumpTwo(x){
    i_two = i_two + x;
    if(i_two > i_two_max || i_two < 0){
        return i_two =  i_two - x;
    };
    $(".operate_list").css("left", i_two * -729 / 75 + "rem");
    $(".operate_jump li").eq(i_two).addClass("on").siblings().removeClass("on");
}

$(".operate_jump li").on("click", function(){
    i_two = $(this).index();
    $(this).addClass("on").siblings().removeClass("on")
        .parents(".operate_contain").find(".operate_list").css("left", i_two * -729 / 75 + "rem")
})

$(".operate_list").on("touchstart", function(e){
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