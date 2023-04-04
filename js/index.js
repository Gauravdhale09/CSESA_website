$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });

    // toggle menu

    $('.menubtn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menubtn i').toggleClass("active");
        document.querySelector('.column-left').style.display = "none";
        
    });
    $('.btn1').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menubtn i').toggleClass("active");
        document.querySelector('.column-left').style.display = "block";
    })
   
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

document.querySelectorAll('.product-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = "block";
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.pop-image span').onclick  = () => {
    document.querySelector('.pop-image').style.display = "none";
}