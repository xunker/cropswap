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

    Home.prototype.template = "<div class='home'><div class='row-fluid'><div class='span1'></div><div class='span5 sharing-image image-container'><img src='images/home/sharing.jpg'></div><div class='span5 sharing-text'><h1>What are your neighors growing?</h1></div><div class='span1'></div></div><div class='row-fluid'>  <div class='span12'>    <h3>CropSwap is the <stong>best<strong> way to share what you grow, and take part in the havest of your community.</h3>    </div></div>  ";

    Home.prototype.render = function() {
      $(this.el).html(rwh(this.template, {
        world: 'y'
      }));
      return this;
    };

    return Home;

  })(Backbone.View);

}).call(this);
