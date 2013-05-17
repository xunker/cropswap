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
      this.bind("all", this.triggerRouteChange);
      this.bind({
        "route:books": this.loadSearch,
        "route:book": this.loadSearch
      });
      return this.bind({
        "all": this.bodyID
      });
    };

    App.prototype.routes = {
      '': 'home',
      'home': 'home',
      'forgot_password': 'forgotPassword',
      'signup': 'signup',
      'books': 'books',
      'books/:bookId': 'book',
      'books/:bookId/*filePath': 'book',
      'sync': 'sync'
    };

    App.prototype.home = function() {
      var view;

      view = new CropSwap.Views.Home();
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
