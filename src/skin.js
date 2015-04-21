/* global
    UserAccounts: false,
    UALog: false
*/
'use strict';

var module;

// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


// Add SUI framework to UserAccounts object
UserAccounts.frameworks.push('sui');
UserAccounts.currentFramework = 'sui';


// uaForm template
UserAccounts.skins.sui = {
  container: function() {
    // at-form ui large fluid {{#if showError}} error {{/if}}
    // {{#if showResult}} success {{/if}} form segment
    return 'ui large fluid form segment';
  }
};

// Title Module
module = UserAccounts._modules.title;
if (module) {
  module.skins.sui = {
    h2: function() {
      return 'ui center aligned dividing header';
    }
  };
}


// OAuth Module
module = UserAccounts._modules.oauth;
if (module) {
  module.skins.sui = {
    button: function() {
      return 'ui fluid labeled icon large button';
    }
  };

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
