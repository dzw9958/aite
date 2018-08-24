$(window).scroll(function () {
    var scroll_height = $(".banner_contain")[0].offsetTop;
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= scroll_height) {
        $(".jump").fadeIn();
    } else {
        $(".jump").fadeOut();
    }
})
