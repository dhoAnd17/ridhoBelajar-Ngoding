// event pada saat link di klik

$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen bersangkutan
    var elemenTujuan = $(tujuan);
    // pindahkan scroll
    $('body').animate({
        scrollTop : elemenTujuan.offset().top - 50
    },1250, 'swing');
    e.preventDefault();
});


// parallax
// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });


    // portofolio
    if(wScroll>$('.portofolio').offset().top -250){
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('muncul')
            },500*(i+1));
        });
        
        // 
    }
});