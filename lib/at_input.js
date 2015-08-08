Template.atInput.rendered = AccountsTemplates.atInputRendered;

// Simply 'inherites' helpers from AccountsTemplates
Template.atInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.atInput.events(AccountsTemplates.atInputEvents);

// Simply 'inherites' helpers from AccountsTemplates
Template.atTextInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atCheckboxInput.helpers(AccountsTemplates.atInputHelpers);

// Fixes focused toggle checkbox after click (does not change color to blue)
Template.atCheckboxInput.events({
  'click .toggle.checkbox > input': function (event) {
    $(event.currentTarget).blur();
  }
});

Template.atSelectInput.rendered = function () {
  $('.ui.dropdown').dropdown();
};

// Simply 'inherites' helpers from AccountsTemplates
Template.atSelectInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atRadioInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atHiddenInput.helpers(AccountsTemplates.atInputHelpers);

// Sets up default Semantic-UI icon classes for social button icons
AccountsTemplates.configure({
  texts: {
    inputIcons: {
      isValidating: 'loading',
      hasError: 'remove',
      hasSuccess: 'green checkmark',
    }
  },
});
