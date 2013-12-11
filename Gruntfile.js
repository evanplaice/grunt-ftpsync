'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    //nodeunit: {
    //  files: ['test/**/*_test.js'],
    //},
    jshint: {
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": "nofunc",
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "unused": true,
        "boss": true,
        "eqnull": true,
        "node": true
      },
      gruntfile: {
        src: 'gruntfile.js'
      },
      tasks: {
        src: ['tasks/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      tasks: {
        files: '<%= jshint.tasks.src %>',
        tasks: ['jshint:tasks', 'nodeunit']
      },
      //test: {
      //  files: '<%= jshint.test.src %>',
      //  tasks: ['jshint:test', 'nodeunit']
      //},
    },
    ftpsync: {
      local: 'C:/Users/eplaice/Dev/node-ftpsync/test/local/',
      remote: '/',
      host: "127.0.0.1",
      port: 9999,
      user: "anonymous",
      pass: "",
      connections: 1,
      ignore: [
        ".htaccess"
      ]
    },
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('./tasks');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
