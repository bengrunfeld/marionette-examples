// Working with Comparator example
var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend();

// Create ItemView
App.ContactItemView = Marionette.ItemView.extend({
  template: "#template",
  events: {
    'click .destroy': 'destroyView'
  },
  destroyView: function(args){
    // Remove a View from CollectionView by removing the model from the Collection
    App.contacts.remove(this.model);
  }
});

// Create a Collection
App.ContactCollection = Backbone.Collection.extend({
  model: App.Contact
});

// Create a CollectionView
App.ContactsView = Marionette.CollectionView.extend({
  el: '.target',
  childView: App.ContactItemView,
  viewComparator: 'firstName'
});

// What should happen on Start
App.on("start", function(){

  // Instantiate some Models
  App.clark = new App.Contact({firstName: 'Clark', lastName: 'Kent'});
  App.tony = new App.Contact({firstName: 'Tony', lastName: 'Stark'});
  App.lex = new App.Contact({firstName: 'Lex', lastName: 'Luthor'});
  App.bruce = new App.Contact({firstName: 'Bruce', lastName: 'Wayne'});

  // Instatiate and populate the Collection
  App.contacts = new App.ContactCollection([App.clark, App.tony, App.lex]);

  // Define the collection your CollectionView is based on
  App.contactsView = new App.ContactsView({collection: App.contacts});

  // Render the CollectionView
  App.contactsView.render();

  // Dynamically add a childView with a model of bruce
  App.contacts.add(App.bruce);
});

App.start();




