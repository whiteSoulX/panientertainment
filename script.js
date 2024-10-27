// Side Bar start

function openNav() {
    const sidepanel = document.getElementById('mySidepanel');

    if (sidepanel) {
        sidepanel.style.left = '0';
    } else {
        console.error('error: Side panel Not Found');
    }
}

function closeNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '-350px';
    } else {
        console.error('error: Side panel Not Found');
    }
}

// Search Bar

function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    } else {
        console.error('error: Search panel Not Found');
    }
}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    } else {
        console.error('error: Search panel Not Found');
    }
}

// Portfolio Gallery Tab

function open_img(evt, cityName) {
    let i, tabcontent, tablinks;

    // Hide all Tab
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove Active Class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and mark the corresponding tab link as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

// Responsive Team Slider

$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

// FAQ Section

document.addEventListener('DOMContentLoaded', function () {
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let collapse = this.parentElement.nextElementSibling;

            // Close all the other accordion items
            accordionButtons.forEach(function (otherButton, otherIndex) {
                if (otherButton !== button) {
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    // Reset the images source and rotation for other accordion items
                    acoimg[otherIndex].src = 'images/icon/plus.png';
                    acoimg[otherIndex].style.transform = 'rotate(0deg)';
                    otherButton.style.backgroundColor = '#fff';
                }
            });

            // Toggle the clicked accordion item
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                acoimg[index].src = 'images/icon/plus.png';
                acoimg[index].style.transform = 'rotate(90deg)';
                button.style.backgroundColor = '';
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + 'px';
                acoimg[index].src = 'images/icon/menus.png';
                acoimg[index].style.transform = "rotate(180deg)";
                button.style.backgroundColor = '#c1b0b5';
            }
        });
    });
});


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
