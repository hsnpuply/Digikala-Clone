const btnAboutUs = document.querySelector('.more-less-content');
const btnAboutUs_P = document.querySelector('.more-less-content p');
const contentAboutUs = document.querySelector('.content');

const navbar_full_line = document.querySelector('.navbar-full-line');


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



// Navbar scrolling

const axsisY=0;

let lastScrolled = window.scrollY;
window.addEventListener('scroll',()=>{

    if(window.scrollY >= lastScrolled + 2){
        // console.log('you are going down buddy');
        // userInfo.style.backgroundColor='red';

        navbar_full_line.classList.add('navbar-full-line-scroll-down-hide');
        navbar_full_line.classList.remove('navbar-full-line-scroll-top-shown');


    }else if(window.scrollY < lastScrolled - 10){
        // console.log('to the top');
        // userInfo.style.backgroundColor='lightblue';
        navbar_full_line.classList.add('navbar-full-line-scroll-top-shown');
        navbar_full_line.classList.remove('navbar-full-line-scroll-down-hide');

    }
     lastScrolled = window.scrollY;


});

