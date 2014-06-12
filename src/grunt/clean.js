/* jshint undef: true, unused: true */
/* global module */
module.exports = {
    dev: {
        options: { force: false },
        files: [
            {
                dot: true,
                src: [
                    '<%= grunt.bbt.tmp %>'
                ]
            }
        ]
    },

    dist: {
        options: { force: true },
        files: [
            {
                dot: true,
                src: [
                    '<%= grunt.bbt.dist %>/*',
                    '<%= grunt.bbt.tmp %>/*',
                    '!<%= grunt.bbt.dist %>/src'
                ]
            }
        ]
    }
}
