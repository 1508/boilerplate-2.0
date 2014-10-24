module.exports = {
    production: {
        options: {
            basePath: '<%= package.resources %>',
            cssDir: '<%= package.build %>/css',
            noLineComments: true,
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    development:{
        options: {
            basePath: '<%= package.resources %>',
            cssDir: '<%= package.build %>/css',
            noLineComments: true,
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    prototype2:{
        options: {
            config: '<%= package.configs %>/compass/config.rb',
            basePath: '<%= package.resources %>',
            cssDir: '<%= package.prototype %>/css',
            noLineComments: true,
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
};