//美容保健方案开始
var program_i = $(".program_sub .on").index();
var program_i_max = $(".program_sub li").length -1;

//解决方案开始
var solution_i = $(".solution_sub .on").index();
var solution_i_max = $(".solution_sub li").length -1;

//最后开始
var focus_i = $(".focus_sub .on").index();
var focus_i_max = $(".focus_sub li").length -1;

//美容保健方案滑动切换开始
function jumpOne(x){
    program_i = program_i + x;
    if(program_i > program_i_max || program_i < 0){
        return program_i = program_i - x;
    };
    $(".program_list").css("left", program_i * -388 / 75 + "rem");
    $(".program_sub li").eq(program_i).addClass("on").siblings().removeClass("on");
}
$(".program_box").on("touchstart", function(e){
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

//解决方案滑动切换开始
function jumpTwo(x){
    solution_i = solution_i + x;
    if(solution_i > solution_i_max || solution_i < 0){
        return solution_i = solution_i - x;
    };
    $(".solution_box").css("left", solution_i * -750 / 75 + "rem");
    $(".solution_sub li").eq(solution_i).addClass("on").siblings().removeClass("on");
}
$(".solution_window").on("touchstart", function(e){
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

//最后滑动切换开始
function jumpThree(x){
    focus_i = focus_i + x;
    if(focus_i > focus_i_max || focus_i < 0){
        return focus_i = focus_i - x;
    };
    $(".focus_box").css("left", focus_i * -680 / 75 + "rem");
    $(".focus_sub li").eq(focus_i).addClass("on").siblings().removeClass("on");
}
$(".focus_window").on("touchstart", function(e){
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
            jumpThree(-1);
        }else if(pullDeltaX < -80){
            //左滑执行的代码
            jumpThree(1);
        }
    })
})