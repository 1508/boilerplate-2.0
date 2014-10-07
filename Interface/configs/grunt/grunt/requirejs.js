module.exports = {
    development:{
        options: {
            name:'almond',
            wrap: true,
            preserveLicenseComments:false,
            insertRequire: ['main'],
            baseUrl: "<%= package.resources %>/js/plugins",
            mainConfigFile: "<%= package.resources %>/js/config.js",
            out: "<%= package.build %>/js/script.js",
            optimize: "none"
        }    
    },
    production:{
        options: {
            name:'almond',
            wrap: true,
            preserveLicenseComments:false,
            insertRequire: ['main'],
            baseUrl: "<%= package.resources %>/js/plugins",
            mainConfigFile: "<%= package.resources %>/js/config.js",
            out: "<%= package.build %>/js/script.js",
            optimize: "uglify2"
        }    
    }
};

