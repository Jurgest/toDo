$('ul').on('click', 'li',function(){
    $(this).toggleClass('completed');
});

// click x
$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
})
$("input[type='text']").keypress(function(e){
    if(e.which=== 13 ) {
        // create var todo
        var todot = $(this).val();
        $(this).val("");
        // add to list
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todot +"</li>");
    }
});
$('.fa-plus').click(function () {
    $("input[type='text']").fadeToggle();
})