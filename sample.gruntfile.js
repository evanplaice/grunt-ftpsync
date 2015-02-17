'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    ftpsync: {
      local: 'C:/dir/to/some/stuff',
      remote: '/',
      host: "127.0.0.1",
      port: 9999,
      user: "johndoe",
      pass: "likescake",
      connections: 1,
      ignore: [
        ".htaccess"
      ]
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-ftpsync');

  // Default task.
  grunt.registerTask('default');
};
