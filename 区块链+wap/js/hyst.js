var c;

var one = $(".scene_window");
var one_i = $(".scene_window .scene_sub .on").index();
var one_i_max = $(".scene_window  .scene_sub li").length - 1;

function jump(x, sub, max, plate) {
  c = sub + x;
  if (c > max || c < 0) {
    return c = sub;
  }
  plate.find("ul").eq(0).css("left", c * -730 / 75 + "rem");
  plate.find("ul").eq(1).find("li").eq(c).addClass("on").siblings().removeClass("on");
}

function slither(sub, max, plate) {
  plate.on("touchstart", function (e) {
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
        jump(-1, sub, max, plate);
      } else if (pullDeltaX < -80) {
        //左滑执行的代码
        jump(1, sub, max, plate);
      }
      sub = c;
    })
  })
}

slither(one_i, one_i_max, one);