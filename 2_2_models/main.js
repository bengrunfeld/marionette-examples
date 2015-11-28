// Working with Models example
var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend();

// Create View
App.ContactView = Marionette.ItemView.extend({
  template: "#template",
});

// What should happen on Start
App.on("start", function(){
  var alice = new App.Contact({
    firstName: "Alice",
    lastName: "Wonderland"
  });

  var aliceView = new App.ContactView({
    model: alice,
    el: '.target'
  });

  aliceView.render(); 

});

// Start
App.start();