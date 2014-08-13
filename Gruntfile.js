module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    inline: {
      dist: {
        src: [ 'index.html' ],
        dest: ['inline/']
      }
    },
    watch: {
      files: ['index.html'],
      tasks: ['inline']
    },   
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-inline');

  grunt.registerTask('default', ['inline']);

};