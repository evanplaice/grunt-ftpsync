'use strict';

var util = require('util');

module.exports = function(grunt) {

  grunt.registerTask('ftpsync', 'Intelligent file syncronization over FTP', function() {
	var done = this.async();
	// fail if settings are missing
	if (!grunt.config('ftpsync')) { console.error('fpsync settings not found'); }

	// fetch the config
	var config = grunt.config('ftpsync');

	// run the sync
	var ftpsync = require('ftpsync');
	ftpsync.settings.local = config.local;
	ftpsync.settings.remote = config.remote;
	ftpsync.settings.host = config.host;
	ftpsync.settings.port = config.port;
	ftpsync.settings.user = config.user;
	ftpsync.settings.pass = config.pass;
	ftpsync.settings.connections = config.connections;
	ftpsync.settings.ignore = config.ignore;
	ftpsync.log.verbose = grunt.option('verbose')
	ftpsync.log.write = function(msg) { grunt.log.writeln(util.inspect(msg)); };
	ftpsync.log.info = grunt.log.ok;
	ftpsync.log.warn = grunt.log.warn;
	ftpsync.log.error = grunt.log.error;
	ftpsync.run(done);
  });
};
