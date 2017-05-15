var ng = {
  core: require("@angular/core")
};

var AjaxFailureHandler = ng.core.Class({
  constructor: function() {},
  handler: function() {
    return function(response) {
      window.alert(response);
    };
  }
});

module.exports = AjaxFailureHandler;
