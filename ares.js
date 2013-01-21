exports = function( strCommand, debugOn ) {
	var log = function(str) { 
		if(debugOn!=undefined) {
			console.log(str);
		} 
	}

	var childProcess = require('child_process'),
		command;

	command = childProcess.exec(strCommand, function (error, stdout, stderr) {
		if (error) {
			log(error.stack);
			log('Error code: '+error.code);
			log('Signal received: '+error.signal);
		}

		log('Child Process STDOUT: '+stdout);
		log('Child Process STDERR: '+stderr);
	});

	command.on('exit', function (code) {
		log('Child process exited with exit code '+code);
	});
}