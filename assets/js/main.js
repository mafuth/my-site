function app(){
    $('body').attr('style','background-image: url(assets/img/body.jpg);');
}
function navWorks(){
    let navController = 0;
    $('.navbar-brand').click(function(){
        navController++;
        if(navController == 1){
            $('.intro').hide();
            $('.works').fadeIn(1000);
            $('next').hide();
            $('next').html('CONTACT');
            $('next').fadeIn(1000);

        }
        if(navController == 2){
            $('.works').hide();
            $('.contact').fadeIn(1000);
            $('next').hide();
            $('next').html('HOME');
            $('next').fadeIn(1000);

        }
        if(navController == 3){
            $('.contact').hide();
            $('.intro').fadeIn(1000);
            $('next').hide();
            $('next').html('WORKS');
            $('next').fadeIn(1000);

            navController = 0;
        }
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