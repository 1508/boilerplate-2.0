module.exports = {
    production: {
        src: ['<%= package.build %>/css/*.css'],
        options: {
            force: true,
        }
    },
    prototype: {
        src: ['<%= package.prototype %>/**'],
        options: {
            force: true,
        }
    }
};