module.exports = {
    development:{
        files:[ 
            {
                //Fonts
                expand: true,
                cwd: '<%= package.resources %>/assets/',
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
    }

};