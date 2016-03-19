# New-Base-Project
Just a boilerplate, basic project structure for a new project.




Use the following commands to generate your default project, and use bower to install the base components

- [ ] $ bower init

If you do not have grunt-init install it with the following command:
ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] $ sudo npm install -g grunt-init

Install a base template. Once grunt-init is installed, place this template in your ~/.grunt-init/ directory. It's recommended that you use git to clone this template into that directory, as follows:
ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile

Now run the following:
- [ ] $ grunt-init gruntfile

Now, run :
- [ ] $ sudo npm install

Once that is done you will have all required node packages, so now you can run grunt:

- [ ] $ grunt

Isn’t that just friction awesome!grunt

But, let’s take this a step further. We will install other packages to enable grunt to create the project structures. What we did above was create the project libraries, create a Gruntfile.js file which will manage common tasks. So to get started review this link:
https://www.npmjs.com/package/grunt-mkdir

ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] $ npm install grunt-mkdir --save-dev

Now, we will update the grunt template you previously installed:

Add the following:
grunt.loadNpmTasks('grunt-mkdir');


grunt.initConfig({
  mkdir: {
    options: {
      // Task-specific options go here. 
    },
    your_target: {
      // Target-specific options go here. 
    },
  },
})

-OR-

grunt.initConfig({
  mkdir: {
    all: {
      options: {
        create: ['tmp', 'test/very/deep/folder']
      },
    },
  },
})


##More Options

Yeoman is a generic scaffolding system allowing the creation any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects.

Installing yo and some generators

First thing is to install yo using npm:

- [ ] $ npm install -g yo

Then install the needed generator(s). Generators are npm packages named generator-XYZ. Search for them on our website or by selecting "install a generator" menu option while running yo. To install the webapp generator:

- [ ] $ npm install -g generator-webapp

New Node and npm users might runs into permissions issues. These issues shows up in the form of EACCESS errors during installation. Refer to the npm guide to fix permissions if this happens to you.


###Final Thoughts
It would be nice to combine all of this in one command. That might be possible, but several commands have options, and typically you must choose your libraries.