var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
  el: '.target',
  template: '#template'
});

ContactManager.on("start", function(){
  var staticView = new ContactManager.StaticView({
    template: '#template2'
  });
  staticView.render();
});

ContactManager.start();