Package.describe({
  summary: "User activity notifications for Meteor Accounts."
});

Package.on_use(function (api, where) {

  api.add_files([
    'lib/activity.js',
    'lib/activity.html',
    'lib/activity.css',
  ], ['client', 'server']);

  api.export("Activity", ['client', 'server']);

});

Package.on_test(function (api) {

  api.use('activity');

  api.add_files([
    'tests/activity.js'
  ], ['client', 'server']);

});
