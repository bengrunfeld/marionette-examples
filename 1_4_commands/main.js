// Working with the Application Event Aggregator
var App = new Marionette.Application;

// Create a model
App.Contact = Backbone.Model.extend({
  defaults: {
    name: 'Ben'
  },
  broadcast: function(){
    console.log('Name: ', this.get('name'));
  }
});

// Instantiate the Model
App.contact = new App.Contact();  

// Set up a command handler
App.commands.setHandler("displayName", function(){
  App.contact.broadcast();
});

// Order that the data be fetched
App.commands.execute("displayName");

// Start the app
App.start();