var reflectMetadata = require("reflect-metadata");
var ng = {
  core: require("@angular/core")
};

var CustomerInfoComponent = ng.core.Component({
  selector: "shine-customer-info",
  template: require("./CustomerInfoComponent.html")
}).Class({
  constructor: [
    function() {
    }
  ]
});

module.exports = CustomerInfoComponent;
