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
      $(this.el).html(rwh(this.template, {}));
      return this;
    };

    Offer.prototype.open_crop_or_offer = function() {
      var _ref1;

      return (_ref1 = CropSwap.detail) != null ? _ref1.toggle() : void 0;
    };

    return Offer;

  })(Backbone.View);

}).call(this);
