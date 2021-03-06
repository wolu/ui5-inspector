'use strict';

/**
 * Compiles less files to css files.
 * @param {Object} grunt
 * @param {Object} config
 */
module.exports = function (grunt, config) {
    return {
        dist: {
            options: {
                optimization: 2
            },
            files: [{
                expand: true,
                cwd: '<%= app %>/styles/less',
                dest: '<%= dist %>/styles',
                src: [
                    'main.less',
                    'popup.less'
                ],
                ext: '.css'
            }]
        },
        test: {
            files: [{
                expand: true,
                cwd: '<%= app %>/styles/less',
                dest: '<%= tests %>/styles',
                src: [
                    'main.less'
                ],
                ext: '.css'
            }]
        }
    };
};
