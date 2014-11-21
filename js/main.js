$(function(){

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $('#social-bar').share({
        networks: ['facebook','pinterest','googleplus','twitter','linkedin','tumblr','email','stumbleupon','reddit']
    });

    var x = 0;
    var message = ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum."];
    var effect = ["wobble","rollIn","bounceInDown","lightSpeedIn","swing"];
    var welcome = setInterval(function () {

        $.amaran({
            content:{
                bgcolor:'#8e44ad',
                color:'#fff',
                message:message[x]
            },
            theme:'colorful',
            position:'bottom right',
            closeButton:false,
            cssanimationIn: 'swing',
            cssanimationOut: 'bounceOut'

        });

        if (++x === 3) {
            window.clearInterval(welcome);
        }
    }, 300);
    $('.tryme-1').on('click',function(){
        $.amaran({'message':'My first example!'});
    });
    $('.tryme-2').on('click',function(){
        $.amaran({
            content:{
                title:'Your Download is Ready!',
                message:'1.4 GB',
                info:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'awesome ok'
        });
    });
    $('.tryme-3').on('click',function(){
        $.amaran({
            content:{
                title:'Your Download is Ready!',
                message:'1.4 GB',
                info:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'awesome ok',
            position:'top left'
        });
    });
    $('.tryme-4').on('click',function(){
        $.amaran({
            content:{
                title:'Your Download is Ready!',
                message:'1.4 GB',
                info:'my_birthday.mp4',
                icon:'fa fa-download'
            },
            theme:'awesome ok',
            position:'top left',
            inEffect:'slideRight',
            outEffect:'slideLeft'
        });
    });
    
});