var typeone = 0;
var typetwo = 0;

var boxList = $(".type_two.type_box").find("ul")

$(".type_switch").on("click", "li", function(){
    var that = $(this);
    that.addClass("active").siblings().removeClass("active");
    if(that.parent().hasClass("type_two")){
        
    }
})

$(".type_one.type_switch").on("click", "li", function(){
    var that = $(this);
    var index = that.index();
    var typeone = that.data("typeone");
    boxList.eq(index).addClass("active_switch").siblings().removeClass("active_switch");
    boxList.eq(index).find("li").removeClass("active");
    ajaxfun(typeone, 0);
})

function ajaxfun(typeone, typetwo){
    $.ajax({
        type: 'GET',
        url: 'url',
        data: {isajax:1, typeone: typeone, typetwo: typetwo},
        dataType: 'json',
        success: function(result) {
            var str = '这里放数据';
            $('.selector').html(str);
        }
    });
}