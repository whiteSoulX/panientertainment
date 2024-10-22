// Side Bar start

function openNav(){
    const sidepanel =  document.getElementById('mySidepanel');

    if(sidepanel){
        sidepanel.style.left = '0'
    }else{
        console.error('error:Side pannel Not Found');
    }

}

function closeNav(){
    'use strict'
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-350px'
    }else{
        console.error('error:Side pannel Not Found');
    }
}

// Search Bar

function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='100vh';
        searchpanel.style.borderRadius='0';
    }else{
        console.error('error:Search pannel Not Found');
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='0';
        searchpanel.style.borderTopLeftRadius='100%';
        searchpanel.style.borderTopRightRadius='100%';
    }else{
        console.error('error:Search pannel Not Found');
    }
}

        // Responsive logoipsum Slider

$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
            sliderToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots:false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    ]
});       
