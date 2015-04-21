/* global
  Logger: false,
  UALog: true
*/
'use strict';


// ------------------------------------
//  Create the logger for this package
// ------------------------------------
UALog = new Logger('useraccounts:semantic-ui');

UALog.trace('Initializing logger options');


// ----------------------------------
//  Pick up settings for this logger
// ----------------------------------

var uaLogLevelSettings;
if (
  Meteor.settings &&
  Meteor.settings.public &&
  Meteor.settings.public.useraccounts
) {
  uaLogLevelSettings = Meteor.settings.public.useraccounts.logLevel;
} else if (Meteor.settings && Meteor.settings && Meteor.settings.useraccounts) {
  uaLogLevelSettings = Meteor.settings.useraccounts.logLevel;
}

if (uaLogLevelSettings && uaLogLevelSettings.core) {
  Logger.setLevel('useraccounts:semantic-ui', uaLogLevelSettings.semanticui);
}

if (Meteor.isServer && process.env.USERACCOUNTS_CORE_LOGLEVEL) {
  Logger.setLevel('useraccounts:semantic-ui', process.env.USERACCOUNTS_CORE_LOGLEVEL);
}
