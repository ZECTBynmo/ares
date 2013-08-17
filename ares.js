function log( str ) { 
	if( debugOn!=undefined ) {
		console.log(str);
	} 
}

function Ares( strCommand, debugOn, callback ) {
	this.command = {};

	var childProcess = require('child_process'),
		command = this.command;

	command = childProcess.spawn( strCommand );

	command.stdout.on( 'data', function(data) {
		if( debugOn )
			console.log( data );
	});

	command.stderr.on( 'data', function(data) {
		if( debugOn )
			console.log( data );
	});

	command.on('close', function (code) {
	  	callback();
	});

	return this;
}


//////////////////////////////////////////////////////////////////////////
// Stops the proces
Ares.prototype.kill = function( message ) {
	try {
		this.command.kill();
	} catch( err ) {
		console.log( "Error killing process: " + err );
	}
} // end kill()

exports.ares = Ares;