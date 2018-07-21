const Application = require('quantum/core/Application');

const AssetManager = require('../modules/AssetManager');
const TabManager = require('../modules/TabManager');
const UserInterface = require('../modules/UserInterface');

Object.assign(Application.modules, {
    assets: AssetManager,
    tabs: TabManager,
    ui: UserInterface
});

module.exports = Application;
