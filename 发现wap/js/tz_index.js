$(".card_type").on("click", "li", function(){
  var that = $(this);
  var type = that.data("type");
  that.addClass("on").siblings().removeClass("on");
  console.log(type);
})