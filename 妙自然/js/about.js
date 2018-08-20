//创建地图实例+创建点坐标
var map = new BMap.Map("baidu_map");
var point = new BMap.Point(109.522511,18.854274);
//初始化地图，设置中心点坐标和地图级别+缩放
map.centerAndZoom(point, 12);
map.enableScrollWheelZoom(true);

var marker = new BMap.Marker(point);    // 创建红点
map.addOverlay(marker);                 //增加红点

//创建logo
var pt = new BMap.Point(109.522511,18.854274);
var myIcon = new BMap.Icon("./img/about/i.png", (243,91), {
    anchor: new BMap.Size(-15, 60.5)
});
var marker2 = new BMap.Marker(pt,{icon:myIcon});
//将logo添加到地图中
map.addOverlay(marker2);