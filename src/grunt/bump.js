/* global module */
/* Created by frank on 3/5/14. */

module.exports = {
    options: {
        commit: true,
        commitMessage: 'Bumping version to v%VERSION%',
        commitFiles: ['package.json'], // '-a' for all files
        createTag: false,
        push: false
    }
}
