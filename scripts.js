const btnAboutUs = document.querySelector('.more-less-content');
const btnAboutUs_P = document.querySelector('.more-less-content p');
const contentAboutUs = document.querySelector('.content');

const navbar_full_line = document.querySelector('.navbar-full-line');
const navbar = document.querySelector('.navbar');
const storys = document.querySelector('.storys');
const offers = document.querySelector('.offers');


const searchBoxInput = document.querySelector('.search-box input');
const focusedSearchBox = document.querySelector('.focused-search-box');
const container = document.querySelector('.container');
const OtherContentWhenFocusedSearchBox = document.querySelector('.focused-search-box-container');
const searchContent = document.querySelector('.search-content');



let flagAboutUs=false;
btnAboutUs.addEventListener('click',()=>{
    flagAboutUs==false ? (btnAboutUs_P.textContent='بستن',flagAboutUs=true) :(btnAboutUs_P.textContent='مشاهده بیشتر',flagAboutUs=false);
    // multiply ternery statment

    contentAboutUs.classList.toggle('more-about-us-reveal');

})



const userInfo = document.querySelector('.userInfo');
const profilePanel = document.querySelector('.profile-panel');

userInfo.addEventListener('click',()=>{
    userInfo.classList.toggle('userInfo-Background')
    profilePanel.classList.toggle('shown')
})


userInfo.addEventListener('blur',()=>{
    userInfo.classList.remove('userInfo-Background')
    profilePanel.classList.remove('shown')
})


// Navbar scrolling

const axsisY=0;

let lastScrolled = window.scrollY;
window.addEventListener('scroll',()=>{

    if(window.scrollY >= lastScrolled + 2){
        // console.log('you are going down buddy');
        // userInfo.style.backgroundColor='red';

        navbar_full_line.classList.add('navbar-full-line-scroll-down-hide');
        navbar_full_line.classList.remove('navbar-full-line-scroll-top-shown');
        navbar.classList.add('navbar-scrolled-down');

    }else if(window.scrollY < lastScrolled - 10){
        // console.log('to the top');
        // userInfo.style.backgroundColor='lightblue';

        navbar_full_line.classList.add('navbar-full-line-scroll-top-shown');
        navbar_full_line.classList.remove('navbar-full-line-scroll-down-hide');
        if(window.scrollY + window.innerHeight <= offers.offsetTop + offers.offsetHeight / 2.1){
            navbar.classList.remove('navbar-scrolled-down')
    }
}

    lastScrolled = window.scrollY;


});




searchBoxInput.addEventListener('focus',()=>{
    focusedSearchBox.classList.add('focused-search-box-activated')
    searchContent.classList.add('search-content-activtion')
    document.body.style.overflow='hidden';
    OtherContentWhenFocusedSearchBox.classList.add('focused-search-box-container-shown')

    navbar_full_line.classList.add('navbar-full-line-z-index');

})
searchBoxInput.addEventListener('blur',()=>{
    focusedSearchBox.classList.remove('focused-search-box-activated')
    container.classList.remove('body-blur')
    document.body.style.overflow='scroll';
    searchContent.classList.remove('search-content-activtion')
    OtherContentWhenFocusedSearchBox.classList.remove('focused-search-box-container-shown')
    navbar_full_line.classList.remove('navbar-full-line-z-index');


})