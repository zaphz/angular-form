/* global module */
/* Created by frank on 3/7/14. */

module.exports = {
    replace: {
        src: [ '<%= grunt.bbt.tmp %>/{,*/}*.html' ],
        options: {
            inline: true
        }
    }
}
