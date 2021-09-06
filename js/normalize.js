$(document).ready(function() {
    $('.headerBlock_1_1').on('click', () => {
        $('.navbar').toggleClass('navbarActive');
    });

    let link = $('.link');
    link.on('click', function(){
        let activeContent = $(this).attr('href');
        $('.visibleBlock').removeClass('visibleBlock');
        $(activeContent).addClass('visibleBlock');
    });

    $('.link-1').on('click', () => {
        $('.indicator').css('top', '18px');
    });
    $('.link-2').on('click', () => {
        $('.indicator').css('top', '90px');
    });
    $('.link-3').on('click', () => {
        $('.indicator').css('top', '160px');
    });
    $('.link-4').on('click', () => {
        $('.indicator').css('top', '230px');
    });
    $('.link-5').on('click', () => {
        $('.indicator').css('top', '299px');
    });
    $('.link-6').on('click', () => {
        $('.linkSetting').toggleClass('blockShow');
        $('.link-6_indicator').toggleClass('link-6_indicatorActive');
    });

    var token = '3b7eb97b4cb26e648ff662bd00f206712c16608a';
    $(".address").suggestions({
        
        token: token,
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});

function addAddress() {
    var input = document.querySelector('.address').value;

    var wrapperAddress = document.querySelector('.addressWrappper');

    var newElement = document.createElement('div');
    
    if(input.length < 3) {
        $('.warning_noText').addClass('warning_noText_Active');
        setTimeout(() => {
            $('.warning_noText').removeClass('warning_noText_Active');
        },2000);
    } else {
        $('.searchBtn').on('click', () => {
            $('.addressWrappper').addClass('addressWrappperActive');
            $('.noText').addClass('noTextActive');
        });
        newElement.classList.add('addAddress');
        newElement.innerHTML = input;
        wrapperAddress.appendChild(newElement);
        $('.noText').html('Адреса');
        !$('.addressWrappper').find('div').length && ($('.noText').html('Список адресов пуст'));
    };
};
