/* global module */
/* Created by frank on 3/6/14. */

module.exports = {
    options: {
        assetsDirs: [
            '<%= grunt.bbt.dist %>',
            '<%= grunt.bbt.dist %>/static/images',
            '<%= grunt.bbt.dist %>/static/admin',
            '<%= grunt.bbt.dist %>/static/admin/images'
        ]
    },
    html: [
        '<%= grunt.bbt.dist %>/{,*/}*.html',
        '<%= grunt.bbt.dist%>/static/views/{,*/}*.html',
        '<%= grunt.bbt.dist%>/static/admin/views/{,*/}*.html',
        '<%= grunt.bbt.dist%>/static/templates/{,*/}*.html',
        '<%= grunt.bbt.dist%>/static/admin/templates/{,*/}*.html'
    ],
    css: [
        '<%= grunt.bbt.dist %>/static/styles/{,*/}*.css',
        '<%= grunt.bbt.dist %>/static/admin/styles/{,*/}*.css'
    ]
}

