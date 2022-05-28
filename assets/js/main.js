function app(){
    $('body').attr('style','background-image: url(assets/img/intro.jpg);');
    $('.me').click(function(){
        window.location.replace("cmd.html");
    });
}
function navWorks(){
    let navController = 0;
    $('.navbar-brand').click(function(){
        navController++;
        if(navController == 1){
            $('body').attr('style','background-image: url(assets/img/works.jpg);');
            $('.intro').hide();
            $('.works').fadeIn(1000);
            $('next').hide();
            $('next').html('CONTACT');
            $('next').fadeIn(1000);

        }
        if(navController == 2){
            $('body').attr('style','background-image: url(assets/img/contact.jpg);');
            $('.works').hide();
            $('.contact').fadeIn(1000);
            $('next').hide();
            $('next').html('HOME');
            $('next').fadeIn(1000);

        }
        if(navController == 3){
            $('body').attr('style','background-image: url(assets/img/intro.jpg);');
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
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}