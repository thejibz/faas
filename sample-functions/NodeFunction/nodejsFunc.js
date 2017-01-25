'use strict'

const getStdin = require('get-stdin');
const Client = require('node-rest-client').Client;

module.exports = {
    func: function (task) {
        getStdin().then(content => {
            try {
                let client = new Client();

                // handling client error events 
                client.on('error', function (err) {
                    console.error('node-rest-client error: ' + err);
                    process.exit(1);
                });

                let params = JSON.parse(content);

                task(params, client);
            } catch (err) {
                console.error("fprocess error: " + err);
                process.exit(1);
            }
        }
        )
    }
}
