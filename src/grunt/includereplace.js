/* jshint undef: true, unused: true */
/* global module */
/**
 * Created by frank on 2/25/14.
 */
module.exports = {
    options: {
        prefix: '@@'
    },
    dev: {
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app %>',
                src: [
                    '{,*/}*.html',
                    'static/**/*.{handlebar,html}',
                    '!static/bower_components/**/*.{handlebar,html}'
                ],
                dest: '<%= grunt.bbt.tmp %>'
            }
        ]
    },
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app %>',
                src: [
                    '{,*/}*.html',
                    'static/**/*.{handlebar,html}',
                    '!static/bower_components/**/*.{handlebar,html}'
                ],
                dest: '<%= grunt.bbt.tmp %>'
            }
        ]
    }
}

