$(".know_btn").on("click", "li", function(){
    var that = $(this);
    var index = that.index();
    var contain = $(".know_contain");
    
    contain.find(".active").removeClass("active").find(".active_btn").removeClass("active_btn");
    that.addClass("active_btn").parents(".know_box").addClass("active");

    contain.find(".active_list").removeClass("active_list");
    that.parents(".know_box").find(".know_list").eq(index).addClass("active_list");
})