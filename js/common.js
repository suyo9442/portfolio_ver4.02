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


//gnb 해당영역 이동
const gnb = document.querySelectorAll('.header ul li a');
const index = document.querySelectorAll('.index');
const headerHeight = document.querySelector('#header').offsetHeight;

gnb[0].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({top: index[1].offsetTop - headerHeight, behavior:'smooth'});
})
gnb[1].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({top: index[0].offsetTop - headerHeight, behavior:'smooth'});
})
gnb[2].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({top: index[2].offsetTop - headerHeight, behavior:'smooth'});
})


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


// popup
var popBtn = $('.por_list li .img a');
var popCont = $('.overay');
var popClose = $('.close');

popBtn.click(function(e){
    e.preventDefault();
    var target2 = $(this);

    var index2 = target2.index();
    popCont.eq(index2).addClass('popup_show');
    $('body').css('overflow', 'hidden');
})
popClose.click(function(e){
    e.preventDefault();
    
    popCont.removeClass('popup_show');
    $('body').css('overflow', 'auto');
})