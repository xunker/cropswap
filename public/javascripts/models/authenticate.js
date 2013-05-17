(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Models.Authenticate = (function(_super) {
    __extends(Authenticate, _super);

    function Authenticate() {
      _ref = Authenticate.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Authenticate.prototype.urlRoot = '/api/authenticate';

    Authenticate.prototype.defaults = {
      logged_in: null
    };

    Authenticate.prototype.initialize = function() {
      this.load();
      return this.set_default_redirect_path();
    };

    Authenticate.prototype.authenticated = function() {
      return this.get('logged_in');
    };

    Authenticate.prototype.set_default_redirect_path = function() {
      return this.set('redirect_to_path', '/books');
    };

    Authenticate.prototype.redirect_target = function() {
      var path;

      path = this.get('redirect_to_path');
      this.set_default_redirect_path();
      return path;
    };

    Authenticate.prototype.load = function() {
      var _this = this;

      return $.get('/api/authenticate/check', function(data) {
        console.log('loading');
        _this.trigger('check');
        if (data.ok === true) {
          console.log('ok');
          return _this.set('logged_in', true);
        } else {
          console.log('not ok');
          return _this.set('logged_in', false);
        }
      });
    };

    Authenticate.prototype.logout = function() {
      console.log('logout called');
      CropSwap.books_collection = void 0;
      this.set('logged_in', false);
      this.id = "";
      this.destroy();
      return CropSwap.router.hideSort();
    };

    return Authenticate;

  })(Backbone.Model);

}).call(this);
