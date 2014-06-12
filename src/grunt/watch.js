/* jshint undef: true, unused: true */
/* global module */
// A known bug: https://github.com/firstandthird/load-grunt-config/issues/36
module.exports = {
    less: {
        files: [
            '<%= grunt.bbt.app %>/static/styles/**/*.less',
            '!<%= grunt.bbt.app %>/static/styles/_*/*.less',
            '<%= grunt.bbt.app %>/static/admin/styles/{,*/}*.less',
            '!<%= grunt.bbt.app %>/static/admin/styles/_bootstrap/*.less',
            '!<%= grunt.bbt.app %>/static/admin/styles/bootstrap.less'
        ],
        tasks: ['less:dev', 'notify:less']
    },
    lessInclude: {
        files: [
            '<%= grunt.bbt.app %>/static/styles/_*/*.less',
            '<%= grunt.bbt.app %>/static/admin/styles/_import/*.less'
        ],
        tasks: ['less:dev', 'notify:less']
    },
    css: {
        files: ['<%= grunt.bbt.app %>/static/styles/**/*.css'],
        tasks: ['copy:dev']
    },
    includereplace: {
        files: [
            '<%= grunt.bbt.app %>/{,*/}*.html',
            '<%= grunt.bbt.app %>/static/**/*.{handlebar,html}',
            '!<%= grunt.bbt.app %>/static/bower_components/**/*.{handlebar,html}'
        ],
        tasks: ['includereplace:dev', 'preprocess', 'notify:includereplace']

    }



}
