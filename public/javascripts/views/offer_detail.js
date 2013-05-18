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

    OfferDetail.prototype.crop_sub_types = {
      3: {
        1: "Roma",
        2: "Beefsteak",
        3: "Celebrity",
        3: "Grape",
        3: "Cherry",
        3: "Pear"
      },
      4: {
        7: "Red Delicious",
        8: "Honeycrisp",
        9: "Gala",
        10: "Fuji",
        11: "Granny Smith",
        12: "Pink Lady"
      }
    };

    OfferDetail.prototype.events = {
      'click a.close-link': 'toggle',
      'change select.crop-type': 'update_crop_subtype'
    };

    OfferDetail.prototype.render = function() {
      $(this.el).html(rwh(this.template, {}));
      return this;
    };

    OfferDetail.prototype.toggle = function() {
      return $('.offer-detail-container').toggle();
    };

    OfferDetail.prototype.update_crop_subtype = function() {
      var h, k, sv, v, _ref1;

      sv = parseInt($('select.crop-type').val());
      if (sv.toString() === 'NaN' || !this.crop_sub_types[sv]) {
        return $('select.crop-sub-type').hide();
      } else {
        $('select.crop-sub-type').show();
        h = "<option>-- Select --</option>";
        _ref1 = this.crop_sub_types[sv];
        for (k in _ref1) {
          v = _ref1[k];
          h = h + ("<option value='" + k + "'>" + v + "</option>\n");
        }
        return $('select.crop-sub-type').html(h);
      }
    };

    return OfferDetail;

  })(Backbone.View);

}).call(this);
