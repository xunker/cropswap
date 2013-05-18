(function() {
  var __hasProp = {}.hasOwnProperty;

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
      this.render_nav();
      this.detail = new CropSwap.Views.OfferDetail();
      $('.offer-detail-container').html(this.detail.render().el);
      return this.detail.delegateEvents();
    },
    render_nav: function() {
      $('.navigation').html(this.navigation.render().el);
      return this.navigation.delegateEvents();
    },
    update_user_lat_long: function() {
      if (CropSwap.logged_in_user) {
        return new CropSwap.Models.Geocode(CropSwap.logged_in_user.location.name);
      }
    },
    is_logged_in: function() {
      return !!CropSwap.logged_in_user;
    },
    toggleLoggedIn: function() {
      if (CropSwap.logged_in_user) {
        CropSwap.logged_in_user = void 0;
        FB.logout();
        return CropSwap.render_nav();
      } else {
        return FB.login(function() {
          return [];
        }, {
          scope: 'email, user_location'
        });
      }
    },
    direct_user: function() {
      if (this.is_logged_in() && Backbone.history.getFragment() === 'login') {
        return routeTo('home');
      }
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
    Handlebars.registerHelper("key_value", function(obj, fn) {
      var key, value;

      return ((function() {
        var _results;

        _results = [];
        for (key in obj) {
          if (!__hasProp.call(obj, key)) continue;
          value = obj[key];
          _results.push(fn({
            key: key,
            value: value
          }));
        }
        return _results;
      })()).join('');
    });
    Handlebars.registerHelper("each_with_key", function(obj, fn) {
      var buffer, key, key_name, value;

      key_name = fn.hash.key;
      buffer = (function() {
        var _results;

        _results = [];
        for (key in obj) {
          if (!__hasProp.call(obj, key)) continue;
          value = obj[key];
          value[key_name] = key;
          _results.push(fn(value));
        }
        return _results;
      })();
      return buffer.join('');
    });
    return CropSwap.init();
  });

}).call(this);
