module.exports = {
    development:{
        files:[
            {
                //Fonts
                expand: true,
                cwd: '<%= package.resources %>/',
                src: 'fonts/*',
                dest: '<%= package.build %>'
            },{
                //Javascript
                expand: true,
                cwd: '<%= package.resources %>/js/',
                src: ['standalone/*.js'],
                dest: '<%= package.build %>/js'
            }
        ]
    },
    prototype: {
        files: [{
            src: ['<%= package.resources %>/js/**',
                '<%= package.resources %>/fonts/**',
                '<%= package.resources %>/images/**'
            ],
            dest: '<%= package.prototype %>'
        }],
        options: {
            force: true,
        }
    }

};