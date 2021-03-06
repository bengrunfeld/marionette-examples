// Working with CollectionView example
var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend();

// Create ItemView
App.ContactItemView = Marionette.ItemView.extend({
  template: "#template"
});

// Create a Collection
App.ContactCollection = Backbone.Collection.extend({
  model: App.Contact
});

// Create a CollectionView
App.ContactsView = Marionette.CollectionView.extend({
  el: '.target',
  childView: App.ContactItemView
});

// What should happen on Start
App.on("start", function(){

  // Instantiate some Models
  App.clark = new App.Contact({firstName: 'Clark', lastName: 'Kent'});
  App.tony = new App.Contact({firstName: 'Tony', lastName: 'Stark'});
  App.lex = new App.Contact({firstName: 'Lex', lastName: 'Luthor'});

  // Instatiate and populate the Collection
  App.contacts = new App.ContactCollection([App.clark, App.tony, App.lex]);

  // Define the collection your CollectionView is based on
  App.contactsView = new App.ContactsView({collection: App.contacts});

  // Render the CollectionView
  App.contactsView.render();
});

App.start();






