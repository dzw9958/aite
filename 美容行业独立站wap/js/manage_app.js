//新零售 · 落地板块切换
var i_one = $(".new_sub .on").index();
var i_one_max = $(".new_sub li").length - 1;
//滑动切换
function jumpOne(x){
    i_one = i_one + x;
    if(i_one > i_one_max || i_one < 0 ){
        return i_one = i_one - x;
    };
    $(".new_box").css("left", i_one * -750 / 75 + "rem");
    $(".new_switch li").eq(i_one).addClass("on").siblings().removeClass("on");
    $(".new_sub li").eq(i_one).addClass("on").siblings().removeClass("on");
}

$(".new_contain").on("touchstart", function(e){
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
//点击切换
$(".new_switch li").on("click", function(){
    var that = $(this);
    i_one = that.index();
    that.addClass("on").siblings().removeClass("on");
    $(".new_box").css("left", i_one * -750 / 75 + "rem");
    $(".new_sub li").eq(i_one).addClass("on").siblings().removeClass("on");
})

//智能采购/售后管理切换
$(".intelligent_switch li").on("click", function(){
    var that = $(this);
    index = that.index();
    that.addClass("on").siblings().removeClass("on");
    $(".intelligent_list").css("left", index * -750 / 75 + "rem");
})