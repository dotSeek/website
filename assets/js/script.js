(function ($) {
  var $window = $(window),
    $header = $("#header"),
    $banner = $("#banner");

  // Header.
  if ($header.hasClass("alt") && $banner.length > 0) {
    $window.on("load", function () {
      $window.on("scroll", function () {
        if (
          $window.scrollTop() >
          $banner.outerHeight() - $header.outerHeight()
        ) {
          $header.removeClass("alt");
        } else {
          $header.addClass("alt reveal");
        }
      });
    });
  }
})(jQuery);
