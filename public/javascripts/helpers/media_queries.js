$(function() {
  return enquire.register("screen and (min-width: 980px)", {
    match: function() {
      $("body").addClass("gt-980");
      $("body").removeClass("lt-980");
      $(".navbar-inner button.btn-navbar").hide();
      return $(".nav-collapse.collapse").addClass("show");
    },
    unmatch: function() {
      $("body").addClass("lt-980");
      $("body").removeClass("gt-980");
      $(".navbar-inner button.btn-navbar").show();
      return $(".nav-collapse.collapse").removeClass("show");
    }
  }).listen();
});
