	
var runPage, interval, autoPlay, thisPage;

// autoPlay = function(to) {
//     clearTimeout(interval);
//     interval = setTimeout(function() {
//         runPage.go(to);
//     }, 10000);
// }

runPage = new FullPage({
    id: 'pageContain',                            // id of contain
    slideTime: 800,                               // time of slide
    continuous: true,
    effect: {                                     // slide effect
        transform: {
            translate: 'Y',					      // 'X'|'Y'|'XY'|'none'
            scale: [1, 1],					      // [scalefrom, scaleto]
            rotate: [0, 0]					      // [rotatefrom, rotateto]
        },
        opacity: [0, 1]                           // [opacityfrom, opacityto]
    },
    mode: 'wheel,touch,nav:navBar',                     // mode of fullpage
    easing: [0, .93, .39, .98],                   // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
    callback : function(index, thisPage) {     // callback when pageChange
        // index = index + 1 > 7 ? 0 : index + 1;
        // autoPlay(index);
    }
});

// interval = setTimeout(function() {
//     runPage.go(runPage.thisPage() + 1);
// }, 10000);

// 导航切换
$(".nav_pc .nav_btn").on("click", function(e){
    e.preventDefault();
    $('.nav_pc').toggleClass('active');
});

$(".nav_wap .nav_btn").on("click", function(e){
    var that = $(this);
    e.preventDefault();
    that.toggleClass('active');
    $('.nav_hide').toggleClass('active');
})