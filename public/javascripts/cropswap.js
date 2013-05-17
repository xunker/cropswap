(function() {
  window.rwh = function(html_obj, data) {
    var h;

    h = html_obj.html ? html_obj.html() : h = html_obj;
    return Handlebars.compile(h)(data);
  };

  window.routeTo = function(route) {
    if (CropSwap.router.routes[route]) {
      return CropSwap.router.navigate(route, {
        trigger: true
      });
    } else {
      return alert("No route named '" + route + "'!");
    }
  };

  window.CropSwap = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      this.router = new CropSwap.Routers.App;
      Backbone.history.start({
        pushState: true,
        hashChange: false
      });
      this.navigation = new CropSwap.Views.Navigation();
      return this.render_nav();
    },
    render_nav: function() {
      $('.navigation').html(this.navigation.render().el);
      return this.navigation.delegateEvents();
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
