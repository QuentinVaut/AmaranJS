var amaran = (function() {
  var amaranCounter = {
    'top left': 0,
    'top right':0,
    'bottom left':0,
    'bottom right':0
  };
  var amaranObject = {
    // private defaults just for amaran construction
    privateDefaults: {
      wrapper: 'amaran-wrapper',
      innerWrapper : 'amaran-wrapper-inner'
    },
    // amaranjs public defaults you can change them
    defaults : {
      theme: 'default',
      position: 'top right',
      content: 'Hello World!',
      inEffect: 'fade',
      outEffect: 'fade'
    },
    init: function(config){
      this.defaults = this.merge(this.defaults,config);
      this.createWrapper();
    },
    createWrapper: function(){
      var inner;
      // Try to get wrapper element.
      var wrapper = document.getElementsByClassName(this.privateDefaults.wrapper+' '+ this.defaults.position);
      // if we dont have wrapper create wrapper
      if(wrapper.length<=0) {
        // create new wrapper and inner wrapper
        var new_wrapper = this.createEl(this.privateDefaults.wrapper+' '+ this.defaults.position);
        inner = this.createEl(this.privateDefaults.innerWrapper);
        new_wrapper.appendChild(inner);
        document.querySelector('body').appendChild(new_wrapper);
      }else {
        // if we have a wrapper lets get inner wrapper.
        inner = wrapper[0].getElementsByClassName(this.privateDefaults.innerWrapper)[0];
      }
      this.wrapper = wrapper;
      // get amaran dom node.
      var amaran = this.createAmaran();
      // append amaran to inner wrapper
      inner.appendChild(amaran);
      // handle amaran closing function.
      this.close(amaran);
    },
    createAmaran: function(){
      var amaran;
      var options = { template: this.defaults.theme };
      if((typeof this.defaults.content) == 'object'){
        options = this.merge(options,this.defaults.content);
      }else {
        options['content'] = this.defaults.content;
      }
      amaran = this.parseHTML(this.engine(this.themes.default(),options))[0];
      amaranCounter[this.defaults.position] +=1;

      if(this.defaults.inEffect=='fade'){
        amaran.style.cssText = 'opacity:0;display:block;';
        setTimeout(function(){
          amaran.style.cssText += 'opacity:1;transition-duration: 1500ms;';
        },300);
      }
      return amaran;
    },
    close: function(element){
      var that = this;
      var style;
      var directions = this.defaults.position.split(" ");
      var effect = this.defaults.outEffect.replace('to','').toLowerCase();

      var afterEndStyle = 'margin-top: -55px;';
      var position = this.getPosition(element);
      if(effect=='left' || effect=='right') {
        var move = (directions[1]==effect) ? position[4] : position[2];
        move = (effect=='left') ? move*-1 : move;
        style = this.transform('translateX('+move+'px);');
      }

      if(effect=='top' || effect=='bottom') {
        style = this.transform('translateY(-'+(position[9]+position[10])+'px);');
        if(effect=='bottom') {
          style = this.transform('translateY('+position[11]+'px);');
          afterEndStyle = 'margin-bottom:-55px';
        }
      }


      element.addEventListener("click", function(e){
        this.style.cssText += style;
        element.addEventListener( 'transitionend',function(e) {
          this.style.cssText += afterEndStyle;
          if(e.propertyName=="margin-bottom") element.parentNode.removeChild(element);
        }, true );
      });


    },
    getPosition: function(element){
      var that = this;
      // Get all required values.
      var wrapper = this.wrapper[0];
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      var wrapperHeight = wrapper.offsetHeight;
      var wrapperWidth = wrapper.offsetWidth;
      var wrapperOffsetTop = wrapper.offsetTop;
      var wrapperOffsetBottom = windowHeight - (wrapperOffsetTop + wrapperHeight);
      var wrapperOffsetLeft = wrapper.offsetLeft;
      var wrapperOffsetRight = windowWidth - (wrapperOffsetLeft + wrapperWidth);
      var elementOffsetTop = element.offsetTop;
      var elementHeight = element.offsetHeight;
      var elementOffsetBottom = windowHeight - elementOffsetTop;


      return [
        wrapper, //0
        windowHeight,//1
        windowWidth,//2
        wrapperHeight,//3
        wrapperWidth,//4
        wrapperOffsetTop,//5
        wrapperOffsetBottom,//6
        wrapperOffsetLeft,//7
        wrapperOffsetRight,//8
        elementOffsetTop,//9
        elementHeight,//10,
        elementOffsetBottom//11
      ];


    },
    transform: function(style){
      var text = '';
      var vendor = [
        'webkitTransform',
        'MozTransform',
        'msTransform',
        'OTransform',
        'transform'
      ];
      for(var i in vendor) {
        text += vendor[i]+':'+style+';';
      }
      return 'transition-duration: 1000ms;'+text;
    },
    getWidth: function(el) {
      var temp = el.cloneNode(true);
      var yeni;
      var width;
      temp.style.visibility = "hidden";
      yeni = document.querySelector('body').appendChild(temp);
      width = this.outerWidth(yeni);
      yeni.parentNode.removeChild(yeni);
      return width;
    },
    parseHTML : function(str) {
      var tmp = document.implementation.createHTMLDocument();
      tmp.body.innerHTML = str;
      return tmp.body.children;
    },
    outerWidth: function(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      return width;
    },
    createEl: function(name){
      var elem = document.createElement("div");
      elem.className += name;
      return elem;
    },
    themes:{
      default: function(){
        return '<div class="amaran <%this.template%>">'+
            '<div class="default-spinner">'+
            '<span style="background-color:<% if(typeof this.color == "undefined"){%>#27ae60<%}else{%><%this.color%><%}%>"></span>'+
            '</div>'+
            '<div class="default-message">'+
            '<span><%this.content%></span>'+
            '</div>'+
            '</div>';
      }
    },
    merge: function(a, b) {
      var c = {};
      for(var idx in a) { c[idx] = a[idx]; }
      for(var idx in b) { c[idx] = b[idx]; }
      return c;
    },
    engine: function(html, options) {
      var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
      var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
      }
      while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
      }
      add(html.substr(cursor, html.length - cursor));
      code += 'return r.join("");';
      return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    }
  };

  return function(config){
    return amaranObject.init(config);
  };
}());
