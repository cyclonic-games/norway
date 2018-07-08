const webfontloader = require('webfontloader');

module.exports = class Window {

    constructor (name, fn) {
        this.kind = name;
        this.fn = fn;
    }

    open (app) {
        webfontloader.load({ google: { families: [ 'Open+Sans:300' ] } });
        this.fn(app);
    }
}
