module.exports = {
    options: {
        mainConfigFile: '<%= grunt.bbt.app %>/static/scripts/require.config.js',
        baseUrl: 'app/static/scripts'
    },
    main: {
        options: {
            name: '../bower_components/almond/almond',
            include: 'main',
            out: '<%= grunt.bbt.dist %>/static/scripts/all.js'
        }
    }
}
