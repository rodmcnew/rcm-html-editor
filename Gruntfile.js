module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                dist : {
                    options: {
                        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                        mangle: false,
                        sourceMap: true,
                        sourceMapName: 'dist/<%= pkg.name %>.map'
                    },
                    files: {
                        'dist/<%= pkg.name %>.min.js': [
                            'src/rcm-html-editor-guid.js',
                            'src/rcm-html-editor-event-manager.js',
                            'src/rcm-html-editor-service.js',
                            'src/angular-rcm-html-editor.js'
                        ],
                        'dist/adapter-tinymce/<%= pkg.name %>.min.js': [
                            'src/adapter-tinymce/rcm-html-editor-config.js',
                            'src/adapter-tinymce/rcm-html-editor-options.js',
                            'src/adapter-tinymce/rcm-html-editor.js',
                            'src/adapter-tinymce/rcm-html-editor-toolbar.js'
                        ]
                    }
                }
            },
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    sourceMap: true,
                    roundingPrecision: -1
                },
                target: {
                    files: {
                        'dist/adapter-tinymce/<%= pkg.name %>.min.css': [
                            'src/adapter-tinymce/css/editor.css'
                        ]
                    }
                }
            },
            copy: {
                dist: {
                    expand: true,
                    cwd: 'src/adapter-tinymce/html',
                    src: '**',
                    dest: 'dist/adapter-tinymce/html'
                }
            },
            concat: {
                options: {
                },
                dist: {
                    files: {
                        'dist/<%= pkg.name %>.js': [
                            'src/rcm-html-editor-guid.js',
                            'src/rcm-html-editor-event-manager.js',
                            'src/rcm-html-editor-service.js',
                            'src/angular-rcm-html-editor.js'
                        ],
                        'dist/adapter-tinymce/<%= pkg.name %>.js': [
                            'src/adapter-tinymce/rcm-html-editor-config.js',
                            'src/adapter-tinymce/rcm-html-editor-options.js',
                            'src/adapter-tinymce/rcm-html-editor.js',
                            'src/adapter-tinymce/rcm-html-editor-toolbar.js'
                        ]
                    }
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy', 'cssmin', 'concat']);
};
