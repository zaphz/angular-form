/* jshint undef: true, unused: true */
/* global module */
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: false,
                cwd: '<%= grunt.bbt.app %>',
                dest: '<%= grunt.bbt.tmp %>',
                src: [
                    '*.{ico,png,txt,html,htm}',
                    '.htaccess',
                    'static/**/*',
                    '!static/bower_components',
                    '!static/bower_components/**/*'
                ]
            },
            {
                expand: true,
                dot: false,
                cwd: '<%= grunt.bbt.app %>',
                dest: '<%= grunt.bbt.dist %>',
                src: [
                    '*.{ico,png,txt,html,htm}',
                    '.htaccess',
                    'static/images/**/*',
                    'static/fonts/**/*',
                    'static/admin/images/**/*',
                    'static/admin/fonts/**/*',
                    'static/admin/ui-resource/**/*'

                ]
            }
        ]
    },
    all: {
        files: [
        ]
    },
    dev: {
        files: [
            {
                expand: true,
                dot: false,
                cwd: '<%= grunt.bbt.app %>',
                dest: '<%= grunt.bbt.tmp %>',
                src: [
                    '*.{ico,png,txt,html,htm}',
                    '.htaccess',
                    'static/{,admin/}styles/**/*.css',
                    'static/admin/ui-resource/**/*'
                ]
            }
        ]
    }
}
