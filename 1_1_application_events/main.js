// Working with Models example
var App = new Marionette.Application();

// Set up Application Events
App.on("before:start", function(options){
  console.log('At event Before:Start. Options: ' + JSON.stringify(options));
});

// What should happen on Start
App.on("start", function(options){
  console.log('At event Start. Options: ' + JSON.stringify(options));
});

App.options = {
  name: "Ben"
}

App.onBeforeStart = function(options){
  console.log('At Before:Start function. Options: ' + JSON.stringify(options));
}

App.onStart = function(options){
  console.log('At Start function. Options: ' + JSON.stringify(options));
}

// Start the app
App.start(App.options);