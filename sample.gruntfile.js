'use strict';

module.exports = function(grunt) {

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

  grunt.loadNpmTasks('grunt-ftpsync');

  grunt.registerTask('default');
};
