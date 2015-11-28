// Working with the Application Event Aggregator
var App = new Marionette.Application;

App.Person = Backbone.Model.extend({
  greeting: function(){
    console.log('Hello everyone!');
  }
});

// Create a Contact model
App.Contact = Backbone.Model.extend({
  producePerson: function(options){
    App.vent.trigger('createPerson');
  }
});

// Define a vent event handler
App.vent.on('createPerson', function(){
  App.person = new App.Person();
});

// Instantiate the Model
App.contact = new App.Contact();

// Call the ProducePerson function
App.contact.producePerson();

// Call the greeting function
App.person.greeting();

// Start the app
App.start();