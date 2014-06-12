/* jshint undef: true, unused: true */
/* global module */
/**
 * Created by frank on 2/25/14.
 */
module.exports = {
    dev: {
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app %>/static',
                src: ['*', '!styles', '!admin'],
                dest: '<%= grunt.bbt.tmp %>/static',
                filter: 'isDirectory'
            },
            {
                expand: true,
                cwd: '<%= grunt.bbt.app %>/static/admin',
                src: ['*', '!styles'],
                dest: '<%= grunt.bbt.tmp %>/static/admin',
                filter: 'isDirectory'
            }
        ]
    },
    dist:{
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app %>/static',
                src: ['bower_components'],
                dest: '<%= grunt.bbt.tmp %>/static',
                filter: 'isDirectory'
            }
        ]

    }
}

