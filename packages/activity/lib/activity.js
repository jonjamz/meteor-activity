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
    name: "jon"
  };

}());