Activity = (function () {

  // Utility

  var isObject = function (x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  };

  var isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };

  var isFunction = function (x) {
    return typeof x === 'function';
  };

  var isString = function (x) {
    return typeof x === 'string';
  };

  var canUseConsoleLog = function () {
    return typeof console !== 'undefined' && console.log;
  };

  var isMeteor = function () {
    return typeof Meteor !== 'undefined';
  };

  // Checks

  if (!isMeteor) throw new Error("Activity package requires Meteor! Meteor.com");

  if (Meteor.isClient) {
    console.log("hello client");
  }

  if (Meteor.isServer) {
    console.log("hello server");
  }

  return {

    /*
     * Takes an options object containing:
     *
     * name (Optional - a unique name for this instance)
     * types (Optional - array of activity type names)
     *
     * * * * * * * * * * * * * * * * * * * * */
    create: function (obj) {
      var name = null, types = null;

      // Set up name
      if (obj.name && isString(obj.name)) {
        name = obj.name;
      } else if (obj.name && !isString(obj.name)) {
        throw new Error("Activity name must be provided as a string.");
      }

      // Set up types
      if (obj.types && isArray(obj.types)) {
        types = obj.types;
      } else if (obj.types && !isArray(obj.types)) {
        throw new Error("Activity types must be provided as an array.");
      }

      // Set up templates

    }
  };

}());