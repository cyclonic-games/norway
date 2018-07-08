const Plugin = require('quantum/core/Plugin');

module.exports = new Plugin('common', host => {
    host.subscribe('start').forEach(() => {
        host.ui.render('main', { width: 1024, height: 768, frame: false, transparent: true, webPreferences: { webSecurity: false } });
    });
});
