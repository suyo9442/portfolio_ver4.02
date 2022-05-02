// 모바일 100vh 리사이징
let vh = window.innerHeight * 0.01;
document
    .documentElement
    .style
    .setProperty('--vh', `${vh}px`);


// 스크롤시 헤더변경
$(window).on('scroll', function(){
    if($(document).scrollTop() > 1) {
        $('#header').addClass('fixed')
    } else {
        $('#header').removeClass('fixed')
    }
});


// about_desc 탭메뉴
var tabBtn = $('.profile .tab_menu li')
var tabCont = $('.profile .tab_box > div')

tabCont.hide().eq(0).show()

tabBtn.click(function(e){
    e.preventDefault();

    var target = $(this)

    tabBtn.removeClass('active')
    target.addClass('active')

    tabCont.css('display', 'none')

    var index = target.index();
    tabCont.eq(index).css('display', 'block')
});


// contact_form - 메일전송
$('.myForm button[type=submit]').on('click', function(e){
    e.preventDefault();

    emailjs.init("iXk1UCB1WapemmNDY");

    emailjs.sendForm('service_qoq925s', 'template_4pipo6j', '#myForm')
    .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
       alert('메일 전송이 완료되었습니다.')
    }, function(error) {
        // console.log('FAILED...', error);
        alert('메일 전송이 실패했습니다.')
    });
})
