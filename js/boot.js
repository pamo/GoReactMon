var React = require('react'),
    MainView = require('./views/main_view'),
    appController = require('./app_controller');

var boot = function(appContainer){
  if( typeof appContainer === 'undefined' ){
    appContainer = document.getElementsByTagName('main')[0];
  }


  var appRenderer = function(appState){
    var theApp = React.createElement( MainView, appState );
    return React.render( theApp, appContainer );
  }

  appController(appRenderer);
};

module.exports = boot;
