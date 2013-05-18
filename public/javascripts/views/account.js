(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Account = (function(_super) {
    __extends(Account, _super);

    function Account() {
      _ref = Account.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Account.prototype.template = JST['account'];

    Account.prototype.render = function() {
      $(this.el).html(rwh(this.template, {
        user: CropSwap.logged_in_user
      }));
      return this;
    };

    return Account;

  })(Backbone.View);

}).call(this);
