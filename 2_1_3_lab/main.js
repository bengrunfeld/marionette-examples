var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend();

// Create View
App.ContactView = Marionette.ItemView.extend({
  template: "#template",

  ui: {
    destroyButton: '.destroy'
  },

  events: {
    'click @ui.destroyButton': 'destroyView'
  },

  destroyView: function(){
    this.destroy();
  },

  onBeforeDestroy: function(){
    console.log(this.el);
  },

});

// What should happen on Start
App.on("start", function(){
  var alice = new App.Contact({
    firstName: "Alice",
    lastName: "Wonderland"
  });

  var aliceView = new App.ContactView({
    model: alice,
    el: '.target',
  });

  aliceView.render();

});

// Start
App.start();






