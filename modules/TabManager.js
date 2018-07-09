const Module = require('quantum/core/Module');

class TabManager extends Module {

    constructor () {
        super();
        this.collection = { };
    }

    create (name, options) {
        this.collection[ name ] = options;
    }
}

module.exports = TabManager;
