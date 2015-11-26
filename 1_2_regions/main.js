// Region example
var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
  template: '#template'
});

ContactManager.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: ".target",

    regions: {
      main: ".region1"
    }
  });
  
  ContactManager.regions = new RegionContainer();
});

ContactManager.on("start", function(){
  var staticView = new ContactManager.StaticView();
  ContactManager.regions.main.show(staticView);
});

ContactManager.start();