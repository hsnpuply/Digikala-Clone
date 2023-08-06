const btnAboutUs = document.querySelector('.more-less-content');
const btnAboutUs_P = document.querySelector('.more-less-content p');
const contentAboutUs = document.querySelector('.content');

let flagAboutUs=false;
btnAboutUs.addEventListener('click',()=>{
    flagAboutUs==false ? (btnAboutUs_P.textContent='بستن',flagAboutUs=true) :(btnAboutUs_P.textContent='مشاهده بیشتر',flagAboutUs=false);
    // multiply ternery statment

    contentAboutUs.classList.toggle('more-about-us-reveal');




})