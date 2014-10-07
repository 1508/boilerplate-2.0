module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: '../../resources/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= package.build %>/images/'
        }]
    }
};