module.exports = {
    production: {
        options: {
            config: '<%= package.configs %>compass/config-production.rb'
        }
    },
    development:{
        options: {
            config: '<%= package.configs %>compass/config-development.rb'
        }
    }
};