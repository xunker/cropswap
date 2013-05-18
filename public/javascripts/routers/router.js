(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Routers.App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.initialize = function() {
      return this.bind("all", this.triggerRouteChange);
    };

    App.prototype.routes = {
      '': 'home',
      'home': 'home',
      'search': 'search',
      'offer': 'offer',
      'account': 'account',
      'login': 'login'
    };

    App.prototype.home = function() {
      var view;

      view = new CropSwap.Views.Home();
      return $('.wrapper').html(view.render().el);
    };

    App.prototype.search = function() {
      var view;

      view = new CropSwap.Views.Search();
      return $('.wrapper').html(view.render().el);
    };

    App.prototype.offer = function() {
      var view;

      if (CropSwap.is_logged_in) {
        view = new CropSwap.Views.Offer();
        return $('.wrapper').html(view.render().el);
      } else {
        return routeTo('login');
      }
    };

    App.prototype.account = function() {
      var view;

      if (CropSwap.is_logged_in()) {
        view = new CropSwap.Views.Account();
        return $('.wrapper').html(view.render().el);
      } else {
        return routeTo('login');
      }
    };

    App.prototype.login = function() {
      var view;

      view = new CropSwap.Views.Login();
      return $('.wrapper').html(view.render().el);
    };

    App.prototype.triggerRouteChange = function(event) {
      if (/^route:/.test(event)) {
        console.log("route change event: " + event);
        this.trigger('change');
        return $(".nav-collapse.collapse").removeClass("show");
      }
    };

    return App;

  })(Backbone.Router);

}).call(this);
