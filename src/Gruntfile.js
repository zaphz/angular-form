/* jshint undef: true, unused: true, node:true */
/* global module,require */
'use strict';


module.exports = function (grunt) {
    grunt.bbt = {
        app: 'app',
        dist: '..',
        tmp: '.tmp',
        test: 'test'
    }

    require('load-grunt-tasks')(grunt)
    require('time-grunt')(grunt)
    require('load-grunt-config')(grunt)

}
