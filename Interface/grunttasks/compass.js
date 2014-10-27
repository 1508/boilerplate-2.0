module.exports = {
    production: {
        options: {
            config: '<%= package.configs %>/compass/config-production.rb'
        }
    },
    development:{
        options: {
            config: '<%= package.configs %>/compass/config-development.rb'
        }
    },
    prototype:{
        options: {
            basePath: '<%= package.root %>',
            sassDir: '<%= package.resources %>/sass',
            imagesDir: '<%= package.resources %>/images',
            raw: 'Sass::Script::Number.precision = 10\n',
            cssDir: '<%= package.prototype %>/css',
            noLineComments: true,
            outputStyle: 'compressed',
            environment: 'production'
        }

    },
};