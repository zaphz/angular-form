/* global module */
/* Created by frank on 3/6/14. */
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= grunt.bbt.app %>/static/fonts',
                src: '{,*/}*.svg',
                dest: '<%= grunt.bbt.dist %>/static/fonts'
            }
        ]
    }
}

