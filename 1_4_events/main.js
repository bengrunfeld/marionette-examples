// Working with Models example
var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend({});

// Create View with events
App.ContactView = Marionette.ItemView.extend({
  template: "#template",

  events: {
    'click p': 'alertPhoneNumber'
  },

  alertPhoneNumber: function(){
    alert(this.model.escape("phone"));
  }  
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
    lastName: "Zombie",
    phone: "444-5555"
  });

  var aliceView = new App.ContactView({
    model: alice
  });

  App.regions.main.show(aliceView);
});

// Start
App.start();