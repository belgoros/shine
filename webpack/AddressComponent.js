var reflectMetadata = require("reflect-metadata");
var ng = {
  core: require("@angular/core")
};

var AddressComponent = ng.core.Component({
  selector: "shine-address",
  template: require("./AddressComponent.html")
}).Class({
  constructor: [
    function() {
    }
  ]
});

module.exports = AddressComponent;
