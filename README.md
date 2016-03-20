# New-Base-Project
(For my team) These are the basics of what a web developer is expected to know. So, this is just a boilerplate, basic project structure for a new project. This uses NPM (Node Package Manager), Grunt, and Bower, and optionally Yoeman. These tools are now common place tools for a web/app developer creating a front-end user interface. Since you are here I won't go through Git, but I myself am learning while I go. From this starting point you can create/install any resource and be able to automate the process of distrobution - such as to a production server. You might just want to see Yeoman below.
Note: In all the following commands do not type the dollar sign. "$" before the command. This just means it is a command to type because in your terminal the line always starts with it.

##To start, install NodeJS and NPM 
(NodeJS and NPM comes together) 
See __https://nodejs.org/en/__
Once Node is installed you can do all of the following, so from here I am assuming you have it. In their words 
>"Node.js(R) is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world."

Simply get this project and start building, but below is how I started.

##How I Started
As for me, I like simple instructions, such as do this, then that, so that is what I am trying to do here. Its hard where to assume what a person might or might not know, and what level of instruction to provide. I usually prefer implicit instructions. 
By the way, here is a guide on Markdown: https://daringfireball.net/projects/markdown/basics


>Oh, by the way there is something you should know, and its confusing. Unlike installing an Application on a computer whereas its in only one place, a node module, or bower component can either be installed in just your project or saved in a global location on your computer. So, take note of command options such as "-g", and "--save-dev". My preference is to put packages in a global location, but there are many cases where you just want to install it for a project - such as compatibility, and sharing. But it is common to have bower_components, and node_modules within your project. This does not mean you need to distribute these, and we typically don't unless you yourself are creating a component or module. So, we update the ".gitignore" file to ignore these directories. I purposely included the ".gitignore" for you to see here. Check it out and you will see that I am ignoring these directories and files.

###Start by creating a Basic Setup with Bower
I just can't live without Bower now that its here. See http://bower.io
In their words 
>"Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you."

##Install Bower

__Bower is a command line utility. Install it with npm.__

ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] $ __npm install -g bower__

Bower requires node, npm and git.

Use the following commands to generate your default project, and use bower to install the base components

- [ ] $ __bower init__

If you do not have grunt-init install it with the following command:

ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] $ __sudo npm install -g grunt-init__

Install a base template. Once grunt-init is installed, place this template in your ~/.grunt-init/ directory. It's recommended that you use git to clone this template into that directory, as follows:

ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] __git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile__

Included in the Gruntfile.js as plugins to do the most common tasks:
```HTML
// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-mkdir');
```

Now run the following:
- [ ] $ __grunt-init gruntfile__

Now run the following:
- [ ] $ __sudo npm install__

Once that is done you will have all required node packages, so now you can run grunt:

- [ ] $ __grunt__

Isn’t that just awesome!

But, let’s take this a step further. We will install other packages to enable grunt to create the project structures. What we did above was create the project libraries, create a Gruntfile.js file which will manage common tasks. So to get started review this link: https://www.npmjs.com/package/grunt-mkdir
__Not needed in this Gruntfile.js__ because its included, and running npm install will automatically include it in your project.

ONLY NEEDED IF YOU DON’T HAVE IT
- [ ] $ __npm install grunt-mkdir --save-dev__


Now, we will update the grunt template you previously installed:

__Add the following:__
grunt.loadNpmTasks('grunt-mkdir'); //(included in this Gruntfile.sj file)

```js
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
```
-OR-
```js
grunt.initConfig({
  mkdir: {
    all: {
      options: {
        create: ['tmp', 'test/very/deep/folder']
      },
    },
  },
})
```

##More Options - Yeoman - Maybe the first
(In their own words - http://yeoman.io/learning/) 
>Yeoman is a generic scaffolding system allowing the creation any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects.

Installing yo and some generators

First thing is to install yo using npm:

- [ ] $ __npm install -g yo__

Then install the needed generator(s). Generators are npm packages named generator-XYZ. Search for them on our website or by selecting "install a generator" menu option while running yo. To install the webapp generator:

- [ ] $ __npm install -g generator-webapp__

> New Node and npm users might runs into permissions issues. These issues show up in the form of EACCESS errors during installation. Refer to the npm guide to fix permissions if this happens to you.
I usually type "sudo" for permissions before any command which will propt you for your password. Such as __$ sudo bower install <package name>__


##Other Cool Tools

###grunt-string-replace 
https://www.npmjs.com/package/grunt-string-replace

Replaces strings on files by using string or regex patterns. 
Attempts to be a String.prototype.replace adapter task for your grunt project.
Inside your Gruntfile.js file add a section named string-replace. This section specifies the files to edit, destinations, patterns and replacements.

###Getting Started
This plugin requires node >= 0.8.0, Grunt >= 0.4.0 and npm >= 1.4.15 (latest stable is recommended).

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

- [ ] $ __npm install grunt-string-replace --save-dev__

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
Include in Gruntfile.js if yu wish.
__grunt.loadNpmTasks('grunt-string-replace');__

Please see their website for more details and options.

###Final Thoughts
It would be nice to combine all of this in one command. That might be possible, but several commands have options, and typically you must choose your libraries. I hope someone smart - unlike me - will do this. In a case like that we could just open our favorite IDE (I like WebStorm for the tooling and terminal built in), and from a terminal opened at the project base type the command, select the options and be done. Yeoman does a lot, and may very well be that final tool to do all the above. Still though you have to manually create the Git repository, set up your SFTP and so forth.