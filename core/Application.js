const Application = require('quantum/core/Application');

const UserInterface = require('../modules/UserInterface');

Object.assign(Application.modules, {
    ui: UserInterface
});

module.exports = Application;
