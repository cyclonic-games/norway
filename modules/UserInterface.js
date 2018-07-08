const electron = require('electron');
const Module = require('quantum/core/Module');

const HOST = `HOST_${ Math.round(Math.random() * Date.now()) }`;

module.exports = class UserInterface extends Module {

    constructor (host) {
        super(host);

        this.windows = new Map();

        global[ HOST ] = host;
    }

    connect () {
        this[ Module.host ].subscribe('window').forEach(event => this.render(...event.details));
    }

    register (id, src, options) {
        this.windows.set(id, { browser: null, options, html: `
            <!doctype html>
            <html>
                <head>
                    <title>${ this[ Module.host ].title }</title>
                    <style>
                        html, body {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            margin: 0;
                        }
                    </style>
                </head>
                <body>
                    <script>
                        {
                            const remote = require('electron').remote;
                            const host = global.host = remote.getGlobal('${ HOST }');
                            const window = require('${ src }');

                            window.open(host);
                        }
                    </script>
                </body>
            </html>
        `.replace(/\\/g, '/') });
    }

    render (id, options) {
        const window = this.windows.get(id);

        if (window) {

            if (!window.browser) {
                window.browser = new electron.BrowserWindow({ ...window.options, ...options });
            }

            window.browser.loadURL(`data:text/html,${ window.html }`);
        }
        else {
            throw new Error(`Unable to display window "${ id }": window does not exist`);
        }
    }
}
