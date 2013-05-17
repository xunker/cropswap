(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Navigation = (function(_super) {
    __extends(Navigation, _super);

    function Navigation() {
      _ref = Navigation.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Navigation.prototype.template = "    <ul>      <li> <a class='home-link' href='#'>CropSwap</a> </li>      <li> <a class='search-link' href='#'>Search for Crops</a> </li>      <li> <a class='offer-link' href='#'>Offer your Crops</a> </li>      <li> <a class='account-link' href='#'>Your Account</a> </li>      <li> <a class='log-in-link' href='#'>Log In</a> </li>      <li> <a class='log-out-link' href='#'>Log Out</a> </li>    </ul>";

    Navigation.prototype.events = {
      "click a.home-link": function() {
        return window.routeTo("home");
      },
      "click a.search-link": function() {
        return window.routeTo("search");
      },
      "click a.offer-link": function() {
        return window.routeTo("offer");
      }
    };

    Navigation.prototype.render = function() {
      $(this.el).html(rwh(this.template));
      return this;
    };

    return Navigation;

  })(Backbone.View);

}).call(this);
