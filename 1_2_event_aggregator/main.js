// Working with the Application Event Aggregator
var App = new Marionette.Application;

// Define a vent event handler
App.vent.on('sayHello', function(args){
  console.log('Hello there, ' + args.crowd);
});

App.vent.trigger('sayHello', {crowd: 'Marionette students!'});

// Start the app
App.start();