var App = new Marionette.Application();

App.IntroView = Marionette.ItemView.extend({
  template: '#intro-tpl',
});

App.MainView = Marionette.ItemView.extend({
  template: '#main-tpl',
});

// Define a new Region Manager
App.rm = new Marionette.RegionManager();

// Add regions to Region Manager
App.regions = App.rm.addRegions({
  intro: ".intro",
  main: ".main"
});

// What should happen on Start
App.on("start", function(){

  // Instiate the View
  App.introView = new App.IntroView();
  App.mainView = new App.MainView();

  // Display views inside of the Region
  App.rm.get('intro').show(App.introView);
  App.rm.get('main').show(App.mainView);

  // Now you can go ahead and remove it
  alert('Remove the Region from the page');
  App.rm.removeRegion('intro');

});

App.start();