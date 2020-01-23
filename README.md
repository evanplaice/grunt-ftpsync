<strong><p align="center">NOTICE: This package is officially deprecated</p></strong>

-----

Intelligent file synchronization over FTP using Grunt.

Wrapping the ftpsync library, updating a full hierarchy of files is as simple as adding a new grunt task.

## Getting Started
Install the module with: `npm install --save-dev grunt-ftpsync`

Usage
----------------

## To Install
Install the module with: `npm install --save-dev grunt-ftpsync`

**Note: The --save-dev flag will add grunt-ftpsync to your devDependencies list.

## To Configure


```javascript
// gruntfile.js
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
```

## Settings
  - `host` - hostname/address of the remote ftp server (required).
  - `port` - port of the remote ftp server (default `21`).
  - `user` - ftp username (required).
  - `pass` - ftp password (required).
  - `localRoot` - the root directory of the local host (default `'./'`).
  - `remoteRoot` - the root path of the remote server (default `'./'`).
  - `connections` - the max number of concurrent ftp connections (default `1`).
  - `ignore` - the list of file patterns to ignore.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. 

Before you contribute your changes be sure to Lint your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 Evan Plaice  
Licensed under the MIT license.
