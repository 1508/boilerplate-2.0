module.exports = {
    //Watch for changes in images
    // images: {
    //     files: ['<%= package.resources %>/images/**/*.{png,jpg,gif}'],
    //     tasks: ['newer:imagemin:dynamic'],
    //     options: {
    //         spawn: false,
    //         livereload: true
    //     },
    // },
    images: {
        files: ['<%= package.resources %>/images/**/*.{png,jpg,gif}'],
        tasks: ['newer:copy:images'],
        options: {
            spawn: false,
            livereload: true
        },
    },
    //Watch for changes in scss
    scss: {
        files: ['<%= package.resources %>/sass/**/*.scss'],
        tasks: ['newer:csscomb', 'compass:prototype'],
        options: {
            spawn: false,
            livereload: true
        },
    },
    //Watch for changes in javascript
    // js: {
    //     files: ['<%= package.resources %>/js/**/*.*'],
    //     tasks: ['requirejs:development', 'copy:development'],
    //     options: {
    //         spawn: false,
    //         livereload: true
    //     },
    // }
    js: {
        files: ['<%= package.resources %>/js/**'],
        tasks: ['newer:copy:js'],
        options: {
            livereload: true
        }
    },
    fonts: {
        files: ['<%= package.resources %>/fonts/**'],
        tasks: ['newer:copy:fonts'],
        options: {
            livereload: true
        }
    },
    preprocess: {
        files: [
            '<%= package.html %>/**/*.html'
        ],
        tasks: ['preprocess']
    },
    prototypeLiveReload: {
        files: [
            '<%= package.prototype %>/*.html'
        ],
        options: {
            livereload: true,
        }
    },
};

