module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
        
    pkg: grunt.file.readJSON('package.json'),
        
        //Grunt config paths
        config:{
            resources: 'Implement.Website/resources',
            build: 'Implement.Website/build'
        },
        
        //Compass compiler
		compass: {
			dev: {
				options: {
					config: '<%= config.resources %>/config.rb'
				}
			}
		},

        //Dependency control for js files and minification
        requirejs: {
            dev: {
                options: {
                    name:'almond',
                    wrap: true,
                    preserveLicenseComments:false,
                    insertRequire: ['main'],
                    baseUrl: "<%= config.resources %>/js/plugins",
                    mainConfigFile: "<%= config.resources %>/js/config.js",
                    out: "<%= config.build %>/js/script.js",
                    optimize: "none"
                }
            },
            build:{
                options: {
                    name:'almond',
                    wrap: true,
                    preserveLicenseComments:false,
                    insertRequire: ['main'],
                    baseUrl: "<%= config.resources %>/js/plugins",
                    mainConfigFile: "<%= config.resources %>/js/config.js",
                    out: "<%= config.build %>/js/script.js",
                    optimize: "uglify"
                }            
            }
        }, 
        
        //Copy files from->to
        copy: {
            build: {
                files: [
                    {
                        //Copy assets to build
                        expand: true,
                        cwd: '<%= config.resources %>/assets',
                        src: ['fonts/**', 'images/**'],
                        dest: '<%= config.build %>/assets'
                    },{
                        //Copy PIE file to build
                        expand: true,
                        cwd: '<%= config.resources %>/assets/pie',
                        src: ['PIE.htc'],
                        dest: '<%= config.build %>/css'
                    },{
                        //Copy static js files to build
                        expand: true,
                        cwd: '<%= config.resources %>/js/static',
                        src: ['*.js'],
                        dest: '<%= config.build %>/js/static'
                    }
                ]
            }
        },
        
        //Split stylesheet for IE support due too exceeded amount of selectors.
        bless: {
	        css: {
		        options: {},
		        files: {
		        '<%= config.build %>/css/styles-ie.css': '<%= config.build %>/css/styles.css'
		        }
	        }
        },
        
        //Depricated through require
        concat: {
	        libs: {
	            src: ['<%= config.resources %>/js/libs/**/jquery-*.js', '<%= config.resources %>/js/libs/**/*.js'],
	            dest: '<%= config.resources %>/js/libs.js'
	        },
	        plugins: {
	            src: ['<%= config.resources %>/js/plugins/**/*.js'],
	            dest: '<%= config.resources %>/js/plugins.js'
	        },
	        scripts: {
	            src: ['<%= config.resources %>/js/scripts/**/*.js'],
	            dest: '<%= config.resources %>/js/scripts.js'
	        }
        },
        uglify: {
            libs: {
                src: '<%= config.resources %>/js/libs.js',
                dest: '<%= config.resources %>/js/libs.min.js'
            },
            plugins: {
                src: '<%= config.resources %>/js/plugins.js',
                dest: '<%= config.resources %>/js/plugins.min.js'
            },
            scripts: {
                src: '<%= config.resources %>/js/scripts.js',
                dest: '<%= config.resources %>/js/scripts.min.js'
            }
        },

        //Compress resource images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= config.resources %>/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= config.resources %>/images/'
                }]
            }
        },
        
        //Run specific tasks when a specific file is changed        
        watch: {
            //Watch for changes in JS
            scripts: {
                files: ['<%= config.resources %>/js/**/*.js'],
                tasks: ['concat', 'uglify', 'copy:build'],
                options: {
                    spawn: false,
                },
            },
            
            //Watch for changes in images
            images: {
                files: ['<%= config.resources %>/images/**/*.{png,jpg,gif}'],
                tasks: ['newer:imagemin'],
                options: {
                    spawn: false,
                },
            },
            
            //Watch for changes in scss
            scss: {
                files: ['<%= config.resources %>/sass/**/*.scss'],
                tasks: ['compass', 'copy:build'],
                options: {
                    spawn: false,
                },
            },
        }
	});
    
    //Load tasks dynamically
    
    
    //Test tasks
    grunt.registerTask('test', ['compass', 'imagemin', 'concat', 'uglify', 'copy:build', 'bless']);
    

	grunt.registerTask('default', ['compass', 'imagemin', 'concat', 'uglify', 'copy:build', 'bless']);
    
	grunt.registerTask('build', ['compass', 'imagemin', 'concat', 'uglify', 'copy:build', 'bless']);
    
	grunt.registerTask('minify', ['imagemin']);
    
    
};