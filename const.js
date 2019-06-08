define( {
  "bgColor" : "#124184",
  "logo" : '/images/logo.png' ,
  "overall": {
    "Width": 640,
    "Height": 480
  },
  // "availHeight" : function(){ return window.screen.availHeight } ,
  // "availWidth" : function(){ return window.screen.availWidth }
  "avail": {
    "height" : function(){ return window.innerHeight } ,
    "width" : function(){ return window.innerWidth }
  },
  "locals" : {
    'en' : {
      'helloworld' : 'Hello World'
    },
    'ru' : {
      'helloworld' : 'Превед, Мир'
    }
  }
});
