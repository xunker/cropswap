// Tell jQuery to watch for any 401 errors and handle them appropriately
function reportError(e) {
  if (typeof Airbrake != "undefined")
    Airbrake.notify(e);
}

$.ajaxSetup({
  statusCode: {
    401: function(){
      if (CropSwap.authenticate.logged_in)
        CropSwap.authenticate.logout();
      CropSwap.sendToLogin();
    },
    422: function(a,b,c,d){
      reportError(e);
      console.log('422 UNPROCESSIBLE. Is Bookself running?');
      alert('There was a problem with an upstream service. Please try again later. (Error: 422)');
    },
    500: function(e){
      reportError(e);
      console.log('500 ERROR. Uncaught exception in Ruby?');
      alert('There was a problem with the server. Please try again later. (Error: 500)');
    }
  }
});

window.inIframe = function() {
  if ((parent.CropSwap) && (parent.CropSwap.currentBookId)) {
    return true;
  } else {
    return false;
  }
};

// function to simulate ruby's Array.uniq
Array.prototype.unique = function() {
  var key, output, value, _i, _ref, _results;
  output = {};
  for (key = _i = 0, _ref = this.length; 0 <= _ref ? _i < _ref : _i > _ref; key = 0 <= _ref ? ++_i : --_i) {
    output[this[key]] = this[key];
  }
  _results = [];
  for (key in output) {
    value = output[key];
    _results.push(value);
  }
  return _results;
};
