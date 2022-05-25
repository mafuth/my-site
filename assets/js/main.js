function app(){
    $('body').attr('style','background-image: url(assets/img/body.jpg);')
}
function loadNav(){
    $.ajax({
        type:'GET',
        url:'veiws/nav.html',
        success:function(data){
            $('body').append(data);
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