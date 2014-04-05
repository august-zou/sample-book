var path = require("path");

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-gitbook');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.initConfig({
    'gitbook': {
      development: {
      dest: path.join(__dirname, ".grunt/gitbook"),
      input: "./",
      title: "Sample Book make by gitbook",
      description: "this is a sample book made my gibook.",
      github: "august-zou/sample-book"
      }
    },
    'gh-pages': {
      options: {
        base: '.grunt/gitbook'
      },
      src: ['**']
    },
    'clean': {
      files: '.grunt'
      }
  });

  grunt.registerTask('publish', [
    'gitbook',
    'gh-pages',
    'clean'
  ]);
  grunt.registerTask('default', 'gitbook');
};
