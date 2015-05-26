/* global
    UserAccounts: false,
    UALog: false
*/
'use strict';

// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');

var
  frameworkName = 'sui',
  frameworkSkin = {
    uaForm: {
      container: function() {
        return 'ui large fluid segment';
      }
    },
    title: {
      h2: 'ui center aligned dividing header'
    },
    separator: {
      container: 'ui horizontal divider'
    },
    error: {
      container: 'ui icon error message'
    },
    message: {
      container: 'ui icon info message'
    },
    success: {
      container: 'ui icon success message'
    },
    oauth: {
      button: 'ui fluid labeled icon large button',
      icon: 'icon',
    },
  }
;


// Apply SUI skin to UserAccounts' modules
UALog.trace('Apllying Semantic UI skin to UserAccounts');
UserAccounts.applySkin(frameworkName, frameworkSkin);


// OAuth Module
var module = UserAccounts._modules.oauth;
if (module) {

  // Overwrite original getIcon
  UALog.trace('Overriding oauth module getIcon');
  module.getIcon = function(service) {
    return this.icons[service] || service;
  };

  // Overwrite original getName
  UALog.trace('Overriding oauth module getName');
  module.getName = function(service) {
    return service === 'google' ? 'google plus' : service;
  };
}
