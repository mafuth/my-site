function app(){
    $('body').attr('style','background-image: url(assets/img/body.jpg);');
}
function navWorks(){
    $('.navbar-brand').click(function(){
        //$('main').hide();
    });
}
function loadNav(){
    $.ajax({
        type:'GET',
        url:'veiws/nav.html',
        success:function(data){
            $('body').append(data);
            navWorks();
        }
    });
}
$.ajax({
    type:'GET',
    url:'veiws/'+$('body').attr('data-veiw')+'.html',
    beforeSend:function(){
        loadNav();
    },
    success:function(data){
        $('body').append(data);
        app();
    }
});