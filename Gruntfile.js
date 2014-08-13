module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    haml: {
      compile: {
        files: [{
          expand: true,
          src: ['*.haml'],
          dest: 'html',
          ext: '.html'
        }],
        options: {
          language: "ruby"
        }
      },
    },
    inline: {
      dist: {
        src: [ 'index.html' ],
        dest: ['inline/']
      }
    },
    watch: {
      // files: ['**/*.haml'],
      // tasks: ['haml', 'inline']
      files: ['index.html'],
      tasks: ['inline']
    },   
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-inline');

  grunt.loadNpmTasks('grunt-haml');

  // grunt.registerTask('test', ['jshint', 'qunit']);

  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['haml', 'inline']);

};