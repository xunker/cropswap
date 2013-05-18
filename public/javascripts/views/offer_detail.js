(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.OfferDetail = (function(_super) {
    __extends(OfferDetail, _super);

    function OfferDetail() {
      _ref = OfferDetail.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    OfferDetail.prototype.template = JST['offer_detail'];

    OfferDetail.prototype.tag = 'div';

    OfferDetail.prototype.className = 'offer-detail';

    OfferDetail.prototype.events = {
      'click a.close-link': 'toggle'
    };

    OfferDetail.prototype.render = function() {
      $(this.el).html(rwh(this.template, {}));
      return this;
    };

    OfferDetail.prototype.toggle = function() {
      return $('.offer-detail-container').toggle();
    };

    return OfferDetail;

  })(Backbone.View);

}).call(this);
