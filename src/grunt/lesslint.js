/* global module */
/* Created by frank on 3/5/14. */

module.exports = {
    src: [
        '<%= grunt.bbt.app %>/static/styles/{,*/}*.less',
        '<%= grunt.bbt.app %>/static/admin/styles/{,*/}*.less',
        '!<%= grunt.bbt.app %>/static/admin/styles/_bootstrap/*.less',
        '!<%= grunt.bbt.app %>/static/admin/styles/_ui/*.less',
        '!<%= grunt.bbt.app %>/static/admin/styles/bootstrap.less',
        '!<%= grunt.bbt.app %>/static/admin/styles/vendors/*.{less,css}',
        '!<%= grunt.bbt.app %>/static/admin/styles/wysihtml5.less',
        '!<%= grunt.bbt.app %>/static/**/*_fix.less',
        '!<%= grunt.bbt.app %>/static/styles/vendors/*.{less,css}'
    ],
    options: {
        csslint: {
            csslintrc: '.csslintrc'
        }
    }
}


