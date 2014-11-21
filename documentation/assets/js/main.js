$(function(){
  var theme = 'default';

   var demobj={
    content:{
        title: "Hello From AmaranJS",
        info:'',
        message:'I hope you like it!',
        icon:'fa fa-heart',
        img:'http://api.randomuser.me/0.2/portraits/men/36.jpg',
        user:'John Walker'
    },
    theme: 'awesome ok',
    position:'bottom right'
  };
  var demobj2={
    content:{
        title: "Hello From AmaranJS",
        info:'',
        message:'I hope you like it!',
        icon:'fa fa-heart',
        img:'http://api.randomuser.me/0.2/portraits/men/36.jpg',
        user:'John Walker'
    },
    theme: 'default',
    position:'bottom right'
  };
  $('#theme').on('change',function(){
    theme= $(this).val();
    demobj['theme'] = theme;
    if(theme=='awesome'){
      demobj['theme'] ='awesome error';
    }
    if(theme=='user'){
      demobj['theme'] ='user green';
    }
    
  });
 

  var welcome = $.extend({}, demobj);
  welcome['theme']="awesome error";
  welcome['content']= {title:'Welcome to AmaranJS',message:'I hope you like it!',info:'',icon:'fa fa-heart'};
  welcome['position'] = 'top right';
  $.amaran(welcome);

  $('.run-1').on('click',function(){
    demobj['beforeStart'] = function(){};
    demobj['onClick'] = function(){};
    demobj['afterEnd'] = function(){};
    demobj['position']  = $(this).data('pos') ? $(this).data('pos') : 'bottom right';
    demobj['inEffect']  = $(this).data('ineffect') ? $(this).data('ineffect') : 'fadeIn';
    demobj['content']['message']  = $(this).data('message');
    demobj['outEffect']   = $(this).data('outeffect') ? $(this).data('outeffect') : 'fadeOut';
    demobj['delay']       = $(this).data('delay') ? $(this).data('delay') : '3000';
    demobj['sticky']      = $(this).data('sticky') ? $(this).data('sticky') : false;
    demobj['closeButton'] = $(this).data('closebutton') ? $(this).data('closebutton') : false;
    demobj['clearAll']    = $(this).data('clearall') ? $(this).data('clearall') : false;
    if($(this).data('afterend')){
        demobj['beforeStart'] = function(){};
        demobj['onClick'] = function(){};
        demobj['afterEnd']= function(){ alert("After End Function!");};
    } 
    if($(this).data('beforestart')){
        demobj['afterEnd'] = function(){};
        demobj['onClick'] = function(){};  
        demobj['beforeStart']= function(){alert("Before Start Function!");};
    } 
    if($(this).data('onclick')){
        demobj['afterEnd'] = function(){};
        demobj['beforeStart'] = function(){}; 
        demobj['onClick']= function(){alert("On Click Function!");};
    }
    $.amaran(demobj);
  });
$('.run-2').on('click',function(){
    demobj2['beforeStart'] = function(){};
    demobj2['onClick'] = function(){};
    demobj2['afterEnd'] = function(){};
    demobj2['theme']  = $(this).data('theme') ? $(this).data('theme') : 'default';
    demobj2['position']  = $(this).data('pos') ? $(this).data('pos') : 'bottom right';
    demobj2['inEffect']  = $(this).data('ineffect') ? $(this).data('ineffect') : 'fadeIn';
    demobj2['content']['message']  = $(this).data('message');
    demobj2['outEffect']   = $(this).data('outeffect') ? $(this).data('outeffect') : 'fadeOut';
    demobj2['delay']       = $(this).data('delay') ? $(this).data('delay') : '3000';
    demobj2['sticky']      = $(this).data('sticky') ? $(this).data('sticky') : false;
    demobj2['closeButton'] = $(this).data('closebutton') ? $(this).data('closebutton') : false;
    demobj2['clearAll']    = $(this).data('clearall') ? $(this).data('clearall') : false;
    if($(this).data('afterend')){
        demobj2['beforeStart'] = function(){};
        demobj2['onClick'] = function(){};
        demobj2['afterEnd']= function(){ alert("After End Function!");};
    } 
    if($(this).data('beforestart')){
        demobj2['afterEnd'] = function(){};
        demobj2['onClick'] = function(){};  
        demobj2['beforeStart']= function(){alert("Before Start Function!");};
    } 
    if($(this).data('onclick')){
        demobj2['afterEnd'] = function(){};
        demobj2['beforeStart'] = function(){}; 
        demobj2['onClick']= function(){alert("On Click Function!");};
    }
    console.log(demobj2);
    $.amaran(demobj2);
  });
  $('#doce-1').on('click',function(){
    $.amaran({content:{'message':'My first example!'}});
  });
    $('#doce-2').on('click',function(){
      $.amaran({
        content:{
            title:'My first funcy example!',
            message:'1.4 GB',
            info:'my_birthday.mp4',
            icon:'fa fa-download'
        },
        theme:'awesome ok'
    });

   });
$('#doce-21').on('click',function(){
     $.amaran({
        content:{
            bgcolor:'#27ae60',
            color:'#fff',
            message:'<h4>Title</h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ducimus?'
           },
        theme:'colorful',
        closeButton:true,
        sticky:true
    });
});

$('#doce-22').on('click',function(){
     $.amaran({
        content:{
            bgcolor:'#bdc3c7',
            color:'#222',
            message:'<h4>Title</h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ducimus?'
           },
        theme:'colorful',
        position:'bottom left',
        closeButton:true,
        sticky:true
    });
});
$('#doce-23').on('click',function(){
     $.amaran({
        content:{
            bgcolor:'#2c3e50',
            color:'#fff',
            message:'<strong>Hakan ERSU</strong><span style="width:80px;height:80px;float:left;border-radius:50%;overflow:hidden;margin-right:10px"><img src="http://api.randomuser.me/0.2/portraits/men/23.jpg" alt="" width="80" height="80"></span><p style="font-size:12px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ducimus?</p>'
           },
        theme:'colorful',
        position:'top right',
        closeButton:true,
        sticky:true
    });
});
$('#create-template').on('click',function(){
     $.amaran({
        content:{
            themeName: "myTheme2",

            firstname:'Hakan',
            lastname:'ERSU',
            message:'Hi'
           },
        themeTemplate:function(data){
          return "<div class='mydiv'><span class='title'>USER INFO</span><div class='inner-content'><span class='firstname'>"+data.firstname+"</span><span class='lastname'>"+data.lastname+"</span><span class='message'>"+data.message+"</span></div></div>";
        },
        position:'top right',
        closeButton:true,
        sticky:true
    });
});
$('#create-template2').on('click',function(){
     $.amaran({
        content:{
            themeName: "myTheme",

            firstname:'Hakan',
            lastname:'ERSU',
            message:'Hi'
           },
        themeTemplate:function(data){
          return "<div class='mydiv'><span class='title'>USER INFO</span><div class='inner-content'><span class='firstname'>"+data.firstname+"</span><span class='lastname'>"+data.lastname+"</span><span class='message'>"+data.message+"</span></div></div>";
        },
        position:'top right',
        closeButton:true,
        sticky:true
    });
});
$('#doce-25').on('click',function(){
     $.amaran({
        content:{
            bgcolor:'#8e44ad',
            color:'#fff',
            message:'Lets see with animate.css'
           },
        theme:'colorful',
        position:'bottom right',
        closeButton:true,
        cssanimationIn: 'swing',
        cssanimationOut: 'bounceOut'

    });
});
$('#doce-26').on('click',function(){
     $.amaran({
        content:{
            bgcolor:'#8e44ad',
            color:'#fff',
            message:'Lets see with animate.css'
           },
        theme:'colorful',
        position:'bottom right',
        closeButton:true,
        cssanimationIn: 'rubberBand',
        cssanimationOut: 'bounceOutUp'

    });
});

  $('nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 0,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
  });
  function path(){
    var args = arguments,result = [];
    for(var i = 0; i < args.length; i++){result.push(args[i].replace('@', 'assets/js/syntaxhighlighter/'));}
    return result
  }
   SyntaxHighlighter.autoloader.apply(null, path(
    'applescript            @shBrushAppleScript.js',
    'actionscript3 as3      @shBrushAS3.js',
    'bash shell             @shBrushBash.js',
    'coldfusion cf          @shBrushColdFusion.js',
    'cpp c                  @shBrushCpp.js',
    'c# c-sharp csharp      @shBrushCSharp.js',
    'css                    @shBrushCss.js',
    'delphi pascal          @shBrushDelphi.js',
    'diff patch pas         @shBrushDiff.js',
    'erl erlang             @shBrushErlang.js',
    'groovy                 @shBrushGroovy.js',
    'java                   @shBrushJava.js',
    'jfx javafx             @shBrushJavaFX.js',
    'js jscript javascript  @shBrushJScript.js',
    'perl pl                @shBrushPerl.js',
    'php                    @shBrushPhp.js',
    'text plain             @shBrushPlain.js',
    'py python              @shBrushPython.js',
    'ruby rails ror rb      @shBrushRuby.js',
    'sass scss              @shBrushSass.js',
    'scala                  @shBrushScala.js',
    'sql                    @shBrushSql.js',
    'vb vbnet               @shBrushVb.js',
    'xml xhtml xslt html    @shBrushXml.js'
  ));
  SyntaxHighlighter.all();
});