// Working with the Application Event Aggregator
var App = new Marionette.Application;

App.reqres.setHandler('name', function(){
  return file.get('firstName');
});

// Create a Model
App.File = Backbone.Model.extend({
  defaults: {
    firstName: 'Ben'
  }
});

// Create another Model, and request information from the first model
App.Contact = Backbone.Model.extend({
  initialize: function() {
    var args = App.reqres.request('name');
    console.log('Hello, ', args);
  }
});

var file = new App.File();
var contact = new App.Contact();



// Start the app
App.start();