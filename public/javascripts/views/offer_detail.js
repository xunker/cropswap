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
      'change select.crop-type': 'update_crop_subtype',
      'click input.offer-type': 'update_offer_type',
      'click .save-btn': 'save_crop',
      'click .clear-btn': function() {
        return alert('GNDN');
      }
    };

    OfferDetail.prototype.render = function() {
      $(this.el).html(rwh(this.template, {}));
      this.update_crop_subtype();
      this.update_offer_type();
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

    OfferDetail.prototype.update_offer_type = function() {
      if ($('#offerType1:checked').size() > 0) {
        return $('.offer-detail .accept-type').show();
      } else {
        return $('.offer-detail .accept-type').hide();
      }
    };

    OfferDetail.prototype.save_crop = function() {
      var accept_barter, accept_cash, crop_data, crop_sub_type, crop_type, offer_type, quantity, units,
        _this = this;

      alert('saving');
      crop_type = parseInt($('select.crop-type').val());
      crop_sub_type = parseInt($('select.crop-sub-type').val());
      offer_type = $('.offer-type:checked').val();
      units = parseInt($('select.quantity-unit').val());
      accept_cash = $('.accept-cash:checked').size() > 0;
      accept_barter = $('.accept-barter:checked').size() > 0;
      quantity = $('input.quantity').val();
      if (/\./.test(quantity)) {
        quantity = parseFloat(quantity);
      } else {
        quantity = parseFloat("" + quantity + ".0");
      }
      crop_data = {
        "UserID": CropSwap.logged_in_user.user_id,
        "cropTypeID": crop_type,
        "cropSubTypeID": crop_sub_type,
        "quatity": quantity,
        "unitsID": units,
        "cash": accept_cash,
        "barter": accept_barter
      };
      console.log(JSON.stringify(crop_data));
      ({
        "UserID": 24,
        "cropTypeID": 3,
        "cropSubTypeID": 1,
        "quatity": 12,
        "unitsID": null,
        "cash": false,
        "barter": false
      });
      return $.ajax({
        url: "" + CropSwap.service_base + "/offer",
        type: "POST",
        data: JSON.stringify(crop_data),
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          console.log(data);
          if (data.success === false) {
            return alert('error saving');
          } else {
            return alert('saved!');
          }
        },
        error: function(data) {
          console.log(data);
          return alert('error!');
        }
      });
    };

    return OfferDetail;

  })(Backbone.View);

}).call(this);
