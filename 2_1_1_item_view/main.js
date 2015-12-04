var App = new Marionette.Application();

App.StaticView = Marionette.ItemView.extend({
  el: '.target',
  template: '#template'
});

App.on("start", function(){
  var staticView = new App.StaticView({
    template: '#template2'
  });
  staticView.render();
});

App.start();