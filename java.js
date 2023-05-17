var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Chuyển ảnh sau 2 giây
}


const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const close = document.querySelector('.js-modal-close')
// hàm hiển thị bán vé
function CallBuyTicket(){
    modal.classList.add('open')
}
// hàm tắt khung bán vé
function callClose(){
    modal.classList.remove('open')
}
// hàm tạo eventclick vào
close.addEventListener('click', callClose);
for (const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click', CallBuyTicket);
}

function modalClose(){
    modal.classList.remove('open')
}

modal.addEventListener('click', modalClose);

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === 46;
        if(isClosed){
         header.style.height = 'auto';
        }else
        {
            header.style.height = '46px';
        }
    }

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        /*var isClosed = header.clientHeight === 46;*/
        if (!isParentMenu){
            header.style.height = null;
        }
        else{
            event.preventDefault();
        }
        
    }
}

const search = document.querySelector('.search-type');
const open = document.querySelector('.SearchButton');
const close1 = document.querySelector('#slider');
const close2 = document.querySelector('#content');
const close3 = document.querySelector('#footer');
console.log(search);
function searchOpen(){
    search.classList.add('opensearch')
}
open.addEventListener('click', searchOpen);
 
function searchClose(){
    console.log('click')
    search.classList.remove('opensearch')
}

close1.addEventListener('click', searchClose);
close2.addEventListener('click', searchClose);
close3.addEventListener('click', searchClose);