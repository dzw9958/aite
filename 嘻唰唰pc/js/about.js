$(document).ready(function(){
    //banner轮播
    jQuery(".banner_contain").slide({
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true
    });

    //主题标题切换
    $(".title_list").on("click", "li", function(){
        $(this).addClass("on").siblings().removeClass("on");
    });

    //创建地图实例  
    var map = new BMap.Map("baidu_map");
    //创建点坐标  
    var point = new BMap.Point(113.957893,22.54366);
    //初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 14);
    //左上角，添加默认缩放平移控件
    var top_left_navigation = new BMap.NavigationControl();
    //2D图，卫星图
    var top_right_maptype = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP]});
    //左上角，添加比例尺
    var bottom_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});

    //函数添加
    (function add_control(){
        map.addControl(top_left_navigation);
        map.addControl(top_right_maptype);
        map.addControl(bottom_left_control);
    })();

    //添加带检索功能的信息窗口
    var content = '深圳市艾特软件有限公司'
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
            title  : "深圳市艾特软件有限公司",      //标题
            width  : 250,             //宽度
            height : 50,              //高度
            panel  : "panel",         //检索结果面板
            enableAutoPan : true,     //自动平移
            searchTypes   :[
                BMAPLIB_TAB_SEARCH,   //周边检索
                BMAPLIB_TAB_TO_HERE,  //到这里去
                BMAPLIB_TAB_FROM_HERE //从这里出发
            ]
        });
    var marker = new BMap.Marker(point); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    searchInfoWindow.open(marker);
    map.addOverlay(marker);
});