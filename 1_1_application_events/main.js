// Working with Application example
var MyApp = Marionette.Application.extend({
  initialize: function(options){
    console.log('At Initializer. Options: ' + JSON.stringify(options));
  }
});

// Initialize your Application
var App = new MyApp({name: 'Ben'});

// Declare our options
App.options = {
  name: "Ben"
}

// Set up Application Events
App.on("before:start", function(options){
  console.log('At event Before:Start. Options: ' + JSON.stringify(options));
});

// What should happen on Start
App.on("start", function(options){
  console.log('At event Start. Option value: ' + Marionette.getOption(this, 'name'));
});

App.onBeforeStart = function(options){
  console.log('At Before:Start function. Option value: ' + Marionette.getOption(this, 'name'));
}

App.onStart = function(options){
  console.log('At Start function. Option value: ' + Marionette.getOption(this, 'name'));
}

// Start the app
App.start(App.options);