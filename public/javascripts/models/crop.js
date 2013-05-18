(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Models.Crop = (function(_super) {
    __extends(Crop, _super);

    function Crop() {
      _ref = Crop.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Crop.prototype.urlRoot = 'http://swap-crops.com/WCF.svc/offer';

    Crop.prototype.initialize = function() {
      return this.set('id', 1);
    };

    return Crop;

  })(Backbone.Model);

}).call(this);
