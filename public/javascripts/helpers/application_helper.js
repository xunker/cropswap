(function() {
  Handlebars.registerHelper("ifCover", function(conditional, options) {
    var noImageUrl;

    noImageUrl = "http://bookshelf.deseretbook.com/images/detail_missing.png";
    if (conditional === noImageUrl) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("ifCurrentBook", function(options) {
    if (CropSwap.currentBookId !== void 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("ifSvg", function(options) {
    if (Modernizr.svg) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

}).call(this);
