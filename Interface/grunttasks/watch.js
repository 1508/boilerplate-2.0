module.exports = {
    //Watch for changes in images
    images: {
        files: ['<%= package.resources %>/images/**/*.{png,jpg,gif}'],
        tasks: ['newer:imagemin:dynamic'],
        options: {
            spawn: false,
        },
    },
    //Watch for changes in scss
    scss: {
        files: ['<%= package.resources %>/sass/**/*.scss'],
        tasks: ['compass:development'],
        options: {
            spawn: false,
        },
    },
    //Watch for changes in javascript
    js: {
        files: ['<%= package.resources %>/js/**/*.*'],
        tasks: ['requirejs:development', 'copy:development'],
        options: {
            spawn: false,
        },
    }


};

