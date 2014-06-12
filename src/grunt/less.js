/* jshint undef: true, unused: true */
/* global module */
module.exports = {
    dev: {
        options: {
            compress: false,
            dumpLineNumbers: 'comments',
            sourceMap: true,
            outputSourceFiles: true
        },
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app%>/static/styles/',
                src: [ '**/*.less', '!_*/*.less'],
                dest: '<%= grunt.bbt.tmp%>/static/styles/',
                ext: '.css'
            },
            {
                expand: true,
                cwd: '<%= grunt.bbt.app%>/static/admin/styles/',
                src: [ '{,*/}*.less', '!_*/*.less', '!bootstrap.less'],
                dest: '<%= grunt.bbt.tmp%>/static/admin/styles/',
                ext: '.css'
            }

        ]
    },
    bootstrap: {
        options: {
            compress: false,
            dumpLineNumbers: 'comments',
            sourceMap: false
        },
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app%>/static/admin/styles/',
                src: ['bootstrap.less','ui.less'],
                dest: '<%= grunt.bbt.tmp%>/static/admin/styles/',
                ext: '.css'
            }

        ]
    },
    dist: {
        options: {
            compress: false,
            dumpLineNumbers: 'comments',
            sourceMap: false
        },
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app%>/static/styles/',
                src: [ '**/*.less', '!_*/*.less'],
                dest: '<%= grunt.bbt.tmp%>/static/styles/',
                ext: '.css'
            },
            {
                expand: true,
                cwd: '<%= grunt.bbt.app%>/static/admin/styles/',
                src: [ '{,*/}*.less', '!_*/*.less'],
                dest: '<%= grunt.bbt.tmp%>/static/admin/styles/',
                ext: '.css'
            }
        ]
    }
}
