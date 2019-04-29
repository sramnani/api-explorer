//
// Watches files for changes and runs tasks based on the changed files
//
module.exports = {
    js: {
        files: ['src/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'src/{,*/}*.html',
            'src/templates/{,*/}*.html',
            'src/css/{,*/}*.css',
            'src/scripts/{,*/}*.js'
        ]
    }
}