module.exports = {
    //Watch for changes in images
    images: {
        files: ['<%= package.resources %>/assets/images/**/*.{png,jpg,gif}'],
        tasks: ['imagemin:dynamic'],
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

