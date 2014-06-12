/* global module */
/* Created by frank on 3/6/14. */

module.exports = {
    // This task could be replaced by copy
    dist: {
        options: {
            removeComments: false
        },
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.tmp %>',
                src: [
                    '*.html',
                    'static/{,*/}*.html',
                    'static/admin/views/{,*/}*.html',
                    'static/admin/templates/{,*/}*.html'
                ],
                dest: '<%= grunt.bbt.dist %>'
            }
        ]
    }
}
