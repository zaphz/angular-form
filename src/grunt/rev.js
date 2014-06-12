/* global module */
/* Created by frank on 3/6/14. */

module.exports = {
    dist: {
        files: {
            src: [
                '<%= grunt.bbt.dist %>/static/scripts/{,*/}*.js',
                '<%= grunt.bbt.dist %>/static/admin/scripts/{,*/}*.js',
                '<%= grunt.bbt.dist %>/static/styles/{,*/}*.css',
                '<%= grunt.bbt.dist %>/static/admin/styles/{,*/}*.css',
                '<%= grunt.bbt.dist %>/static/images/**/*.{png,jpg,jpeg,gif,webp}',
                '<%= grunt.bbt.dist %>/static/admin/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
            ]
        }
    }
}

