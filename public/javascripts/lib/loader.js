(function() {
  window.Loader = (function() {
    function Loader() {}

    Loader.show = function() {
      $('body').append('<div class="modal-backdrop fade in"></div>');
      return $('body').append('<div class="loading"><img src="/assets/ajax-loader.gif" width="32px" height="32px" alt="Loading..."/></div>');
    };

    Loader.hide = function() {
      $('body > .modal-backdrop.fade.in').remove();
      return $('body > .loading').remove();
    };

    return Loader;

  })();

}).call(this);
