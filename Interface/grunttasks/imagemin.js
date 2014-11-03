module.exports = {
    options: {
        config: '<%= package.configs %>csscomb/csscomb-config.rb'
    },
    production: {
        files: [{
            expand: true,
            filter: 'isFile',
            cwd: '<%= package.resources %>/images/',
            src: ['**/*.{png,jpg,gif}', '!temporary/**'],
            dest: '<%= package.buildresources %>/images'
        }]
    },
    originals: {
        files: [{
            expand: true,
            filter: 'isFile',
            cwd: '<%= package.resources %>/images/',
            src: '**/*.{png,jpg,gif}',
            dest: '<%= package.resources %>/images'
        }]
    }

};