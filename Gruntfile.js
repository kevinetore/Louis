module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          'dist/js/main.min.js': ['js/current_time.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
