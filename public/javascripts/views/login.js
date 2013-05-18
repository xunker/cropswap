(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Login = (function(_super) {
    __extends(Login, _super);

    function Login() {
      _ref = Login.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Login.prototype.template = JST['login'];

    Login.prototype.events = {
      "click a.login-logout-link": function() {
        return CropSwap.toggleLoggedIn();
      }
    };

    Login.prototype.render = function() {
      if (CropSwap.is_logged_in()) {
        return routeTo('home');
      } else {
        $(this.el).html(rwh(this.template, {
          world: 'y'
        }));
        return this;
      }
    };

    return Login;

  })(Backbone.View);

}).call(this);
