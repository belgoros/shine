var reflectMetadata = require("reflect-metadata");
var ng = {
  core: require("@angular/core")
};

var AddressComponent = ng.core.Component({
  selector: "shine-address",
  template: require("./AddressComponent.html"),
  inputs: [
    "type",
    "address"
  ]
}).Class({
  constructor: [
    function() {
      this.type    = null;
      this.address = null;
    }
  ]
});

module.exports = AddressComponent;
