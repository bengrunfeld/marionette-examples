// Working with Models example
var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend({});

// Create View
App.ContactView = Marionette.ItemView.extend({
  template: "#template"
});

// Set up regions
App.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: ".target",

    regions: {
      main: ".region1"
    }
  });
  
  App.regions = new RegionContainer();
});

// What should happen on Start
App.on("start", function(){
  var alice = new App.Contact({
    firstName: "Alice",
    lastName: "Zombie"
  });

  var aliceView = new App.ContactView({
    model: alice
  });

  App.regions.main.show(aliceView);
});

// Start
App.start();