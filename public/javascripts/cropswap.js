(function() {
  window.JST = {};

  window.CropSwap = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      this.router = new CropSwap.Routers.App;
      return Backbone.history.start({
        pushState: true,
        hashChange: false
      });
    }
  };

  $(document).ready(function() {
    if (jQuery.reject) {
      $.reject({
        reject: {
          msie5: true,
          msie6: true,
          msie7: true,
          msie8: true,
          firefox1: true,
          firefox2: true,
          firefox3: true,
          chrome1: true,
          chrome2: true,
          chrome3: true,
          chrome4: true,
          safari1: true,
          safari2: true,
          safari3: true
        }
      });
    }
    return CropSwap.init();
  });

}).call(this);
