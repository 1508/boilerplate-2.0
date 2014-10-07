module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: '../../resources/assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= package.build %>/images/'
        }]
    }
};