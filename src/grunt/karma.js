/* global module */
/* Created by frank on 2/28/14. */
module.exports = {
    admin_unit_watch: {
        configFile: 'karma.conf.js',
        autoWatch: true
    },
    admin_unit_once: {
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true
    },
    consumer_unit_watch: {
        configFile: 'consumer.karma.conf.js',
        autoWatch: true
    },
    consumer_unit_once: {
        configFile: 'consumer.karma.conf.js',
        autoWatch: false,
        singleRun: true
    }
}
