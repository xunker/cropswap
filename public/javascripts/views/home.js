(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Home = (function(_super) {
    __extends(Home, _super);

    function Home() {
      _ref = Home.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Home.prototype.template = $('#home-template').html();

    Home.prototype.render = function() {
      console.log(this.template);
      $(this.el).html(Handlebars.compile($('#home-template').html())({
        world: 'x'
      }));
      return this;
    };

    return Home;

  })(Backbone.View);

}).call(this);
