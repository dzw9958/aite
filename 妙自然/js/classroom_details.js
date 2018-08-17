// 导航栏切换
$(".nav .nav_btn").on("click", function(e){
    var that = $(this);
    e.preventDefault();
    that.toggleClass('active');
    $('.nav_list').toggleClass('active');
})