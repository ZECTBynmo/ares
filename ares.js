function log( str ) { 
	if( debugOn!=undefined ) {
		console.log(str);
	} 
}

function Ares( strCommand, debugOn, callback ) {
	var log = function(str) { 
		if(debugOn!=undefined) {
			console.log(str);
		} 
	}

	var childProcess = require('child_process'),
		command;

	command = childProcess.exec(strCommand, callback);

	command.on('data', function(data) {
		console.log( data );
	});

	command.on('exit', function (code) {
		log('Child process exited with exit code '+code);
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