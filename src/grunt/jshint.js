/* jshint undef: true, unused: true */
/* global module */
/**
 * Created by frank on 2/25/14.
 */

module.exports = {
    source: {
        options: {
            jshintrc: '.jshintrc',
            ignores: [
                '<%= grunt.bbt.app %>/static/admin/scripts/js_lib/form/depend/*.js',
                '<%= grunt.bbt.app %>/static/scripts/vendors/{,*/}*.js',
                '<%= grunt.bbt.app %>/static/scripts/*.build.js',
                '<%= grunt.bbt.app %>/static/admin/scripts/ui-resource/js/{,*/}*.js'
            ]
        },
        src: [
            '<%= grunt.bbt.app %>/static{,/admin}/scripts/**/*.js'
        ]
    },
    test: {
        options: {
            jshintrc: 'test/.jshintrc',
            ignores: ['<%= grunt.bbt.test %>/{,*/}snippets.js']
        },
        src: [
            '<%= grunt.bbt.test %>/**/*.js'
        ]
    }
}
