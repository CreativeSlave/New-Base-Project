/*! project - v1.0.0 - 2016-03-19
* https://github.com/CreativeSlave/New-Base-Project
* Copyright (c) 2016 Drew Ambrose; Licensed  */
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
            return "Copyright&copy; "+ project.company.name + ", "+ project.years + ". " + rights;
        },
        company: function(){
            return project.company.name;
        }
    }
}