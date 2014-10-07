module.exports = {
    production: {
        src: ['<%= package.build %>/css/*.css'],
    },
    prototype: {
        src: ['<%= package.prototype %>/**'],
    }
};