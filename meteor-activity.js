if (Meteor.isClient) {
  Template.hello.greeting = function () {
    if (Meteor.user && Meteor.user() && Meteor.user().emails) {
      return "Welcome back " + Meteor.user().emails[0].address;
    }
    return "Welcome to meteor-activity.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  console.log(Activity);
}
