$(document).ready(function(){
    $('.pendidikan').on('click', 'small', function(event){
        event.preventDefault();
        $('.list-pendidikan').slideToggle();
    });
    $('.kontak').on('click', 'small', function(event){
        event.preventDefault();
        $('.list-kontak').slideToggle();
    });
    $('.pengalaman').on('click', 'small', function(event){
        event.preventDefault();
        $('.list-pengalaman').slideToggle();
    });
    $('.item-pengalaman').on('click', 'a', function(event){
        event.preventDefault();
        console.log('ahai');
        $(this).parent().find('blockquote').slideToggle();
    })

    $('.facebook').on('mouseenter', logoEnter);
    $('.facebook').on('mouseleave', logoLeave);
    $('.twitter').on('mouseenter', logoEnter);
    $('.twitter').on('mouseleave', logoLeave);
    $('.github').on('mouseenter', logoEnter);
    $('.github').on('mouseleave', logoLeave);
    $('.linkedin').on('mouseenter', logoEnter);
    $('.linkedin').on('mouseleave', logoLeave);

    function logoEnter(){
        $(this).find('.overlay').show('fast');
        $(this).find('img').hide('fast');
    }
    function logoLeave(){
        $(this).find('.overlay').hide('fast');
        $(this).find('img').show('fast');
    }
});