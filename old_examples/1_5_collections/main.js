// Working with Collections example
var App = new Marionette.Application();

// Create Model
App.Contact = Backbone.Model.extend();

// Create a Collection
App.ContactCollection = Backbone.Collection.extend({
  model: App.Contact,
  comparator: "firstName"
});

// Create ItemView
App.ContactItemView = Marionette.ItemView.extend({
  template: "#template",
  tagName: 'li'
});

// Create CollectionView
App.ContactsView = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: App.ContactItemView
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
  var contacts = new App.ContactCollection([bob, tony, lex]);

  var contactsListView = new App.ContactsView({
    collection: contacts
  });

  App.regions.main.show(contactsListView);
});

// Start
var bob = new App.Contact({firstName: 'Bob', lastName: 'Perry'});
var tony = new App.Contact({firstName: 'Tony', lastName: 'Stark'});
var lex = new App.Contact({firstName: 'Lex', lastName: 'Mann'});
App.start();