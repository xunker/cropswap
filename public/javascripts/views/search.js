(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Search = (function(_super) {
    __extends(Search, _super);

    function Search() {
      _ref = Search.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Search.prototype.template = JST['search'];

    Search.prototype.events = {
      'submit #search-form': 'search'
    };

    Search.prototype.render = function() {
      $(this.el).html(rwh(this.template, {
        results: this.results
      }));
      return this;
    };

    Search.prototype.search = function(e) {
      var search_params, _ref1, _ref2,
        _this = this;

      e.preventDefault();
      search_params = {
        term: $('#term').val(),
        lat: ((_ref1 = CropSwap.logged_in_user) != null ? _ref1.latitude : void 0) || 0.1,
        lon: ((_ref2 = CropSwap.logged_in_user) != null ? _ref2.longitude : void 0) || 0.1
      };
      return $.ajax({
        url: "" + CropSwap.service_base + "/search",
        data: JSON.stringify(search_params),
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          console.log('get search success');
          console.log(data);
          _this.results = data;
          return _this.render();
        },
        error: function(data) {
          console.log(data);
          return alert('error search!');
        }
      });
    };

    return Search;

  })(Backbone.View);

}).call(this);
