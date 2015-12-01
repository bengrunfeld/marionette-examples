// Working with Collections example
var App = new Marionette.Application();

App.StaticView = Marionette.ItemView.extend({
  template: '#template',
});

// What should happen on Start
App.on("start", function(){

  // Instiate the View
  App.staticView = new App.StaticView();

  // Add your regions from the HTML page
  App.addRegions({
    mainRegion: '.target'
  });

  // Render and display your View in the Region
  App.mainRegion.show(App.staticView);

  // Now you can go ahead and remove it
  alert('Remove the Region from the page');
  App.mainRegion.empty();

});

App.start();