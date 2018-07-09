const Application = require('quantum/core/Application');

const TabManager = require('../modules/TabManager');
const UserInterface = require('../modules/UserInterface');

Object.assign(Application.modules, {
    tabs: TabManager,
    ui: UserInterface
});

module.exports = Application;
