$(document).ready(function(){
    
    $('checkbox, select').styler();
    
    $('.button').click(function(){
        $('.lenguage-active').css({
            display: 'block'
        });
        $('.lab').css({
            display: 'block'
        });
        $('.button').css({
            opacity: '0'
        });
    });
    $('.lab').click(function(){
        $('.lenguage-active').css({
            display: 'none'
        });
        $('.lab').css({
            display: 'none'
        });
        $('.button').css({
            opacity: '1'
        });
    });
    
    
    $('.bt1').click(function(){
        $('.login').css({
            display: 'block'
        });
        $('.bt1,.bt2,.bt3').css({
            display: 'none'
        });
         $('.d3').addClass('d7');
         $('.d2').addClass('d6');
        
        
    });
    $('.cross').click(function(){
        $('.login,.registration,.special-news').css({
            display: 'none'
        });
        $('.bt1,.bt2,.bt3').css({
            display: 'block'
        });
        $('.d2,.d3,.d1').removeClass('d4 d5 d6 d7');
    });
    $('.bt2').click(function(){
        $('.registration').css({
            display: 'block'
        });
        $('.d2').addClass('d4');
        $('.bt1,.bt2,.bt3').css({
            display: 'none'
        });
    });
    $('.bt3').click(function(){
        $('.special-news').css({
            display: 'block'
        });
        $('.bt1,.bt2,.bt3').css({
            display: 'none'
        });
        $('.d3').addClass('d5');
    });
    $('.more').click(function(){
        var pad = parseInt($('p.tt').css('margin-top'));
        if(pad < -800){
            $('p.tt').animate({
            'margin-top':'0px'
        },'slow');
            
        }else{
        $('p.tt').animate({
            'margin-top':'-=200px'
        },'slow');
        };
       
    });
    
    $('#english').hover(function(){
        $('.cursor img').css({
            top: '50px',
            left: '140px'
        });
    })
    $('#german').hover(function(){
        $('.cursor img').css({
            top: '50px',
            left: '190px'
        });
    })
    $('#russia').hover(function(){
        $('.cursor img').css({
            top: '50px',
            left: '290px'
        });
    })
    $('#arabian').hover(function(){
        $('.cursor img').css({
            top: '90px',
            left: '220px'
        });
    }) 
    $('#france').hover(function(){
        $('.cursor img').css({
            top: '57px',
            left: '155px'
        });
    });
        
        
});