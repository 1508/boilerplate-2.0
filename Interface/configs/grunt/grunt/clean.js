module.exports = {
    production: {
        src: ['<%= package.build %>/css/*.css'],
        options: {
            force: true,
        }
    }
};