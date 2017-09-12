$(function () {
    $('button.navbar-toggle').click(function () {
        $('ul.menu-nav').toggleClass('active');
    });
    $('.control').click(function () {
        var width = $('.designer-item:first').width();
        console.log(width);
        var pwidth = $('.designer-item:first').parent().width();
        console.log(parseFloat(width/pwidth));
        if(parseFloat(width/pwidth) === 1){

        }
    });
});