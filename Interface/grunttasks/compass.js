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
            config: '<%= package.configs %>/compass/config-prototype.rb'
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