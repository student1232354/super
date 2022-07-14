$(document).ready(function() {
    $('.block_title').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block_title').not($(this)).removeClass('active');
            $('.block_text').not($(this).next()).slideUp('active');

        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});