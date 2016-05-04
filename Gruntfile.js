/*global module:false*/

var project = {
    name:"Base Project",
    logos:["/img/logo.svg","/img/logo.png"],
    company:{
        name:"Creative Slave",
        contact:{
            name:"Drew",
            /* Note: Use the private GitHub email address */
            email:"CreativeSlave@users.noreply.github.com",
            phones:[{
                type:"",
                number:""
            }]
        }
    },
    description:"Create a new project simple and easy by cloning and customizing with node, bower, grunt, less, etc.",
    copyright:{
        years:"2015-2016",
        reserved:"All",
        type:"",
        license:"MIT",
        extra:""
    },
    get:{
        copyright: function(){
            var rights = (project.copyright.reserved==='All') ? " All rights reserved.":"";
            return "\nCopyright(C) "+ project.company.name + ", "+ project.years + ". " + rights+"\n";
        },
        company: function(){
            return project.company.name;
        }
    }
};

module.exports = function (grunt) {
    grunt.log.write(project.get.copyright());
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['build/js/<%= pkg.name %>.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        mkdir: {
            all: {
                options: {
                    create: [
                        'node_modules',
                        'bower_components',
                        'build/js',
                        'build/js/controllers',
                        'build/js/services',
                        'build/js/directives',
                        'build/less',
                        'build/less/components',
                        'build/templates',
                        'dist/css',
                        'dist/js',
                        "lib/js",
                        "bin"
                    ]
                },
            },
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    Bootstrap:true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['build/js/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mkdir');

    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify','mkdir']);

};
