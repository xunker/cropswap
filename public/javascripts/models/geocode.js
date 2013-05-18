(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Models.Geocode = (function(_super) {
    __extends(Geocode, _super);

    function Geocode() {
      _ref = Geocode.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Geocode.prototype.urlRoot = 'http://maps.googleapis.com/maps/api/geocode/json';

    Geocode.prototype.initialize = function(loc) {
      this.loc = loc;
      return this.load();
    };

    Geocode.prototype.load = function() {
      return $.get("" + this.urlRoot + "?address=" + this.loc + "&sensor=false", function(data) {
        console.log('loading geocode data');
        if (data.status === 'OK') {
          console.log('got geocode data');
          if (CropSwap.logged_in_user) {
            CropSwap.logged_in_user.latitude = data['results'][0]['geometry']['location']['lat'];
            return CropSwap.logged_in_user.longitude = data['results'][0]['geometry']['location']['lng'];
          } else {
            return console.log('user not logged in, cant add location data');
          }
        } else {
          return alert('failed to load lat/long');
        }
      });
    };

    return Geocode;

  })(Backbone.Model);

}).call(this);
