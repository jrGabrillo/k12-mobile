Template7.registerHelper('json_stringify',function(context){return JSON.stringify(context);});var myApp=new Framework7({animateNavBackIcon:true,precompileTemplates:true,template7Pages:true,template7Data:{'url:projects.html':{firstname:'John',lastname:'Doe',age:32,position:'CEO',company:'Google',interests:['swimming','music','JavaScript','iMac','iOS apps','sport'],projects:[{title:'Google',description:'Nice search engine'},{title:'YouTube',description:'Online video service'},{title:'Android',description:'Mobile operating system'}]},'page:contacts':{tel:'+1 (222) 333-44-55',email:'john@doe.com',country:'USA',city:'San Francisco',zip:'12345',street:'Awesome st'},cars:[{vendor:'Volkswagen',model:'Passat',power:152,speed:280,weight:1400,color:'black',year:2012,description:''},{vendor:'Skoda',model:'Superb',power:152,speed:260,weight:1600,color:'white',year:2013,description:''},{vendor:'Ford',model:'Mustang',power:480,speed:320,weight:1200,color:'red',year:2014,description:''},],about:{name:'John Doe',age:32,position:'CEO',company:'Google',interests:['swimming','music','JavaScript','iMac','iOS apps','sport']}}});var $$=Dom7;var mainView=myApp.addView('.view-main',{dynamicNavbar:true,});