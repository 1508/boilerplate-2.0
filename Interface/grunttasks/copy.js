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
        files:[
            {
                //Fonts
                expand: true,
                cwd: '<%= package.resources %>/',
                src: 'fonts/**',
                dest: '<%= package.prototype %>'
            },{
                //Javascript
                expand: true,
                cwd: '<%= package.resources %>/js/',
                src: ['*.js'],
                dest: '<%= package.prototype %>/js'
            },{
                //Images
                expand: true,
                cwd: '<%= package.resources %>/images/',
                src: ['*.{png,jpg,gif}'],
                dest: '<%= package.prototype %>/images'
            }
        ],
    }

};