/* global module */
/* Created by frank on 3/6/14. */

module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.tmp %>/concat/static/admin/scripts',
                src: ['{,*/}*.js'],
                dest: '<%= grunt.bbt.tmp %>/concat/static/admin/scripts'
            }
        ]
    }
}
