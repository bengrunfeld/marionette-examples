// Working with Collections example
var App = new Marionette.Application();

// Create Model
App.Book = Backbone.Model.extend();

// Create ItemView
App.BookView = Marionette.ItemView.extend({
  template: "#row-tpl",
  tagName: "tr"
});

// Create a Collection
App.Library = Backbone.Collection.extend({
  model: App.Book
});

// Create a CompositeView
App.BookShelf = Marionette.CompositeView.extend({
  childView: App.BookView,
  childViewContainer: "tbody",
  template: "#table-tpl",
  el: '.target'
});

// What should happen on Start
App.on("start", function(){

  // Instantiate some Models
  App.book1 = new App.Book({title: 'Grapes of Wrath'});
  App.book2 = new App.Book({title: 'Who moved my Cheese'});
  App.book3 = new App.Book({title: 'The Alchemist'});
  App.book4 = new App.Book({title: 'Great Books'});

  // Instatiate and populate the Collection
  App.library = new App.Library([App.book1, App.book2, App.book3]);

  // Instatiate the CompositeView
  App.bookshelf = new App.BookShelf({
    // Model is available in template
    model: App.book4,
    // But the CompositeView will loop through collection
    collection: App.library
  });

  // Render the CollectionView
  App.bookshelf.render();

  alert('When book1 is removed from the library, it will be removed from the DOM');
  App.library.remove(App.book1);
});

App.start();