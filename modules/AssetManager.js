const electron = require('electron');

const Module = require('quantum/core/Module');

module.exports = class AssetManager extends Module {

    find (src) {
        return `${ electron.app.getPath('appData') }/Cyclonic Games/Quill/projects/test/assets/${ src }`;
    }
}
