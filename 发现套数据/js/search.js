$(".list").on("click", "a", function () {
  var that = $(this);
  var key = $(".header_center input").val();
  var url = that.data("href") + "&keyword=" + key;
  window.location.href = url;
})