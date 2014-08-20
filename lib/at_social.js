// Simply 'inherites' helpers from AccountsTemplates
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);
// Overrides Font Awesome icon class name with simple service name
Template.atSocial.helpers({
    iconClass: function() {
        var classStr = this.toString();
        if (this[0] === 'g' && this[1] === 'o')
            classStr += ' plus';
        return classStr;
    },
});

// Simply 'inherites' events from AccountsTemplates
Template.atSocial.events(AccountsTemplates.atSocialEvents);