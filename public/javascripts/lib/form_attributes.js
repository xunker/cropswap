(function() {
  window.FormAttributes = (function() {
    function FormAttributes(form) {
      this.form = form;
      return;
    }

    FormAttributes.prototype.attributes = function() {
      var attributes;

      attributes = {};
      _.each($('input', this.form), function(element) {
        element = $(element);
        if (element.attr('name') !== 'commit') {
          if (element.attr('type') === "radio") {
            if (element.is(':checked')) {
              return attributes[element.attr('name')] = element.val();
            }
          } else {
            return attributes[element.attr('name')] = element.val();
          }
        }
      });
      return attributes;
    };

    return FormAttributes;

  })();

}).call(this);
