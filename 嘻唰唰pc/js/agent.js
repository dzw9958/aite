$(document).ready(function(){
    //banner轮播
    jQuery(".banner_contain").slide({
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true
    });

    //授权查询表单事件
    var query_span = $(".query_select span");
    var query_list = $(".query_select .query_list");
    var query_input = $("#query_num");
    var wxreg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
    var sjreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    //菜单显示与隐藏
    query_span.on("click", function(e){
        if(query_list.is(":hidden")){
            query_list.show();
        }else{
            query_list.hide();
        }

        $(document).one("click", function () {
            query_list.hide();
        });

        e.stopPropagation();
    })

    query_list.on("click", function(e){
        e.stopPropagation();
    })

    query_list.on("click", "li", function(){
        var that = $(this);
        var type = that.data("type");
        var text = that.text();
        query_input.attr("data-type", type);
        query_span.text(text);
        query_list.hide();
    })

    //表单提交事件
    $(".query_btn.query_submit").on("click", function(){
        var type = query_input.data("type");
        var info = query_input.val();
        var wxrepinfo;
        var sjrepinfo;
        if(info.length == 0){
            return alert('微信号或者手机号不能为空');
        }else if(type == 0){
            wxrepinfo = wxreg.test(info);
            if(!wxrepinfo){
                return alert("微信号错误");
            }
        }else if(type == 1){
            sjrepinfo = sjreg.test(info);
            if(!sjrepinfo){
                return alert("手机号错误");
            }
        }
        console.log(type + "+" + info);
    })
});