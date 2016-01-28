var amaran = (function() {
  var amaranObject = {
    init:function () {
      console.log('Test');
    }
  };
  return function(config){
    return amaranObject.init(config);
  };

}());
