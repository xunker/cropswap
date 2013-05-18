(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CropSwap.Views.Search = (function(_super) {
    __extends(Search, _super);

    function Search() {
      this.responseHandler = __bind(this.responseHandler, this);      _ref = Search.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Search.prototype.template = JST['search'];

    Search.prototype.render = function() {
      var model;

      model = {};
      model.terms = 'xyz';
      $(this.el).html(rwh(this.template, {
        model: model
      }));
      return this;
    };

    Search.prototype.search = function(e) {
      var attributes, form;

      e.preventDefault();
      form = $('#search-form');
      attributes = new FormAttributes(form).attributes();
      this.book_id = attributes.book_id;
      this.model = new CropSwap.Models.Search();
      console.log(attributes);
      return this.model.save({
        terms: attributes.terms,
        book_id: attributes.book_id
      }, this.responseHandler(form));
    };

    Search.prototype.responseHandler = function(form) {
      var _this = this;

      return {
        success: function(model, response) {
          _this.undoLoading(model);
          _this.trigger('update-results');
        },
        error: function(model, response) {
          var error, errors, view;

          _this.undoLoading(model);
          if (response.status === 422) {
            errors = new ErrorList(response);
            view = new CloudReader.Views.ErrorListView({
              el: form,
              errors: errors
            });
            view.render();
          } else {
            error = new Error(response);
            view = new CloudReader.Views.ErrorView({
              el: _this.el,
              error: error
            });
            view.render();
          }
        }
      };
    };

    return Search;

  })(Backbone.View);

}).call(this);
