Package.describe({
    summary: "UserAccounts styled for Semantic UI.",
    version: "2.0.0",
    name: "useraccounts:semantic-ui",
    git: "https://github.com/meteor-useraccounts/semantic-ui.git",
});

Package.on_use(function(api, where) {
    api.versionsFrom("METEOR@1.0");

    api.use([
        "useraccounts:semantic-ui-templates",
    ], ["client"]);

    api.use([
        "useraccounts:core",
        "useraccounts:init",
    ], ["client", "server"]);

    api.imply([
        "useraccounts:core@2.0.0",
    ], ["client", "server"]);

});
