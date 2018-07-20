const Plugin = require('quantum/core/Plugin');

module.exports = new Plugin('common', host => {
    host.subscribe('start').forEach(() => {
        host.ui.render('main', { width: 1440, height: 900, frame: false, transparent: true, webPreferences: { webSecurity: false } });
    });
});
