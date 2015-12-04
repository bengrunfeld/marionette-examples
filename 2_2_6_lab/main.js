var App = new Marionette.Application();

// Create Model
App.Coffee = Backbone.Model.extend();

// Create ItemView
App.CoffeeCupView = Marionette.ItemView.extend({
  template: "#template",
});

// Create ItemView
App.FormView = Marionette.ItemView.extend({
  template: "#form-template",
  el: '.form-target',
  events: {
    'submit': 'handleSubmit'
  },
  ui: {
    type: 'input[name="type"]',
    desc: 'input[name="desc"]',
    img: 'input[name="img"]',
  },
  handleSubmit: function(e){
    e.preventDefault();
    
    // Grab form data
    App.newCoffee = {};
    App.newCoffee.type = this.ui.type.val();
    App.newCoffee.desc = this.ui.desc.val();
    App.newCoffee.img = this.ui.img.val();

    this.ui.type.val('');
    this.ui.desc.val('');
    this.ui.img.val('');

    // Create new Model
    App.coffees.add({type: App.newCoffee.type, description: App.newCoffee.desc, img: App.newCoffee.img})
  }
});

// Create a Collection
App.CoffeeCollection = Backbone.Collection.extend({
  model: App.Coffee
});

// Create a CollectionView
App.CoffeeMenu = Marionette.CollectionView.extend({
  el: '.target',
  childView: App.CoffeeCupView
});

// What should happen on Start
App.on("start", function(){

  // Instantiate some Models
  App.latte = new App.Coffee({type: 'Latte', description: 'Two shots of espresso, milk and 1 inch of foam', img: 'latte'});
  App.cappuccino = new App.Coffee({type: 'Cappuccino', description: 'Two shots of espresso, milk and 2 inches of foam', img: 'cappuccino'});
  App.americano = new App.Coffee({type: 'Americano', description: 'One shot of espresso, hot water', img: 'americano'});

  // Instatiate and populate the Collection
  App.coffees = new App.CoffeeCollection([App.latte, App.cappuccino, App.americano]);

  // Define the collection your CollectionView is based on
  App.coffeeMenu = new App.CoffeeMenu({collection: App.coffees});

  // Render the CollectionView
  App.coffeeMenu.render();

  // Render the form
  new App.FormView().render();
});

App.start();




