var pomelo = require('pomelo');
var routeUtil = require('./app/util/routeUtil');
/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'pockerofpomelo');


// app configure
app.configure('production|development', function() {
    app.set('connectorConfig', {
        connnector: pomelo.connectors.hybridconnector,
        heartbeat: 3,
        useDict: true,
        useProtobuf: true,
        checkClient: function(type, version) {

        },
        handshake: function(msg, cb) {
            cb(null, {});
        }
    });
	// route configures
	app.route('chat', routeUtil.chat);
    app.route('room', routeUtil.room);

	// filter configures
	app.filter(pomelo.timeout());
});

// start app
app.start();

process.on('uncaughtException', function(err) {
	console.error(' Caught exception: ' + err.stack);
});