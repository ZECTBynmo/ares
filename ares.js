exports.ares = function( strCommand, debugOn, callback ) {
	var log = function(str) { 
		if(debugOn!=undefined) {
			console.log(str);
		} 
	}

	var childProcess = require('child_process'),
		command;

	command = childProcess.exec(strCommand, callback || function (error, stdout, stderr) {
		if (error) {
			log(error.stack);
			log('Error code: '+error.code);
			log('Signal received: '+error.signal);
		}

		if( stdout != undefined && stdout != null && stdout != "" )
			log('Child Process STDOUT: ' + stdout);
		
		if( stderr != undefined && stderr != null && stderr != "" )
			log('Child Process STDERR: ' + stderr);
	});

	command.on('exit', function (code) {
		log('Child process exited with exit code '+code);
	});
}