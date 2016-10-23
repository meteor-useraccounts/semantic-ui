// Simply 'inherites' helpers from AccountsTemplates
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);
// Overrides Font Awesome icon class name with simple service name
Template.atSocial.helpers({
  serviceName: function () {
    var serviceStr = this._id;
    if (serviceStr === 'google')
      serviceStr += ' plus';
    return serviceStr;
  },
  iconClass: function () {
    var classStr = this._id;
    if (classStr === 'google')
      classStr += ' plus';
    if (classStr === 'microsoft')
      classStr = 'windows';
    return classStr;
  },
});
// Simply 'inherites' events from AccountsTemplates
Template.atSocial.events(AccountsTemplates.atSocialEvents);
