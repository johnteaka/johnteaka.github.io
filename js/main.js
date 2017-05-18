(function () {
    "use strict";
    
    /* --- DESIGN - img carousel -- 
     * ----------------------------------------------------------------------*/
    
    //Images for carousel
    var carouselImgs = [
        {
            text: 'Flyers',
            url: 'img/toh-flyers.jpg'
        },
        {
            text: 'Reports',
            url: 'img/toh-reports.jpg'
        },
        {
            text: 'Misc',
            url: 'img/toh-misc.jpg'
        }
    ]
    
    // Shows modal and carousel on click
    $('#img-one__design').click(function(){
        $('.img-carousel').removeClass('hide');
        $('.carousel-wrapper').removeClass('hide');
        $('#carousel-img').attr('src', carouselImgs[0].url);
        $('#carousel-text').html(carouselImgs[0].text);
        $('.img-carousel').addClass('carousel-centered');
        $('.carousel-wrapper').addClass('carousel-fixed');
        $('.img-carousel-close').removeClass('hide');
    });
    
    // Modal opened - once close button is clicked, then remove modal and carousel
    $('.img-carousel-close').click(function(){
        $('.img-carousel').removeClass('carousel-centered');
        $('.carousel-wrapper').removeClass('carousel-fixed');
        $('.img-carousel').addClass('hide');
        $('.carousel-wrapper').addClass('hide');
        $('.img-carousel-close').addClass('hide');
    });
    
    // Chevron right is clicked - do this
    function chevronRightClicked() {
        $('.carousel-chevron__right').click(function(){
            if($('#carousel-img').attr('src').indexOf(carouselImgs[0])){
                $('#carousel-img').attr('src', carouselImgs[1].url);
                $('#carousel-text').html(carouselImgs[1].text);
            }
            if($('#carousel-img').attr('src').indexOf(carouselImgs[1])){
                $('#carousel-img').attr('src', carouselImgs[2].url);
                $('#carousel-text').html(carouselImgs[2].text);
            }
            if($('#carousel-img').attr('src').indexOf(carouselImgs[2])){
                $('#carousel-img').attr('src', carouselImgs[0].url);
                $('#carousel-text').html(carouselImgs[0].text);
            }
        });
        chevronRightClicked();
    }
    
    chevronRightClicked();
    
    
})();
