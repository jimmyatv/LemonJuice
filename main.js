// $(document).ready(function() {
//     $('h1').hide(2000);  
// }) jQuery Check

$(document).ready(function(){
    //? Fixed NavBar nad toTop button
    $(window).on('scroll', function() {
        let scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $('.sticky').addClass('stickyAdd');
            $('.toTop').addClass('toTopAdd');
        } else {
            $('.sticky').removeClass('stickyAdd');
            $('.toTop').removeClass('toTopAdd');
        }
    });



})