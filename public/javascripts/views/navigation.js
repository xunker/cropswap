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

    Navigation.prototype.template = "    <div class='home-link-div'> <a class='home-link' href='#'>      <img src='images/logo.png'>    </a> </div>    <div class='navigation-icon'><a class='navigation-icon-link' href='#'><i class='icon-align-justify'></i></a></a></div>    <ul class='navigation-links'>      <li> <a class='search-link' href='#'><i class='icon-search'></i>Search for Crops</a> </li>      <li> <a class='offer-link' href='#'><i class='icon-leaf'></i>Offer your Crops</a> </li>      <li> <a class='account-link' href='#'><i class='icon-wrench'></i><span>Your Account</span></a> </li>      <li class='login-logout'><a href='#' class='login-logout-link'><i class='icon-off'></i>Log In</a> </li>    </ul>  ";

    Navigation.prototype.events = {
      "click a.home-link": function() {
        return window.routeTo("home");
      },
      "click a.search-link": function() {
        return window.routeTo("search");
      },
      "click a.offer-link": function() {
        return window.routeTo("offer");
      },
      "click a.account-link": function() {
        return window.routeTo("account");
      },
      "click a.navigation-icon-link": 'toggleNavigation',
      "click a.login-logout-link": function() {
        return CropSwap.toggleLoggedIn();
      }
    };

    Navigation.prototype.render = function() {
      console.log('rendering nav');
      $(this.el).html(rwh(this.template));
      if (CropSwap.logged_in_user) {
        $('.login-logout-link').html('<i class="icon-off"></i>Log out');
        $('.account-link span').html(CropSwap.logged_in_user.name);
      }
      return this;
    };

    Navigation.prototype.toggleNavigation = function() {
      return $('.navigation ul.navigation-links').toggleClass('navigation-shown');
    };

    return Navigation;

  })(Backbone.View);

}).call(this);
