(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Offer = (function(_super) {
    __extends(Offer, _super);

    function Offer() {
      _ref = Offer.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Offer.prototype.template = JST['offer'];

    Offer.prototype.events = {
      'click a.add-crop-or-offer-link': 'open_crop_or_offer'
    };

    Offer.prototype.render = function() {
      $(this.el).html(rwh(this.template, {
        buy_offers: (this.buy_offers || []).reverse(),
        sell_offers: (this.sell_offers || []).reverse()
      }));
      if (!this.buy_offers) {
        console.log('loading buy offers');
        this.get_buy_offers();
      }
      if (!this.sell_offers) {
        console.log('loading sell offers');
        this.get_sell_offers();
      }
      return this;
    };

    Offer.prototype.get_buy_offers = function() {
      var _this = this;

      this.buy_offers = [];
      return $.ajax({
        url: "" + CropSwap.service_base + "/getMyBuyOffers/" + CropSwap.logged_in_user.user_id,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          console.log('get buy success');
          console.log(data);
          _this.buy_offers = data;
          return _this.render();
        },
        error: function(data) {
          console.log(data);
          return alert('error loading buy offers!');
        }
      });
    };

    Offer.prototype.get_sell_offers = function() {
      var _this = this;

      this.sell_offers = [];
      return $.ajax({
        url: "" + CropSwap.service_base + "/getMySellOffers/" + CropSwap.logged_in_user.user_id,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          console.log('get sell success');
          console.log(data);
          _this.sell_offers = data;
          return _this.render();
        },
        error: function(data) {
          console.log(data);
          return alert('error loading sell offers!');
        }
      });
    };

    Offer.prototype.open_crop_or_offer = function() {
      var _ref1;

      return (_ref1 = CropSwap.detail) != null ? _ref1.toggle() : void 0;
    };

    return Offer;

  })(Backbone.View);

}).call(this);
