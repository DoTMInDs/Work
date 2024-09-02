

const sideBar = document.querySelector('.side-bar-container');
const openMenu = document.querySelector('.menu');
const closeBar = document.querySelector('#close-menu');

openMenu.addEventListener('click',()=> {
    sideBar.classList.toggle('mobile-menu');
  
});
closeBar.addEventListener('click', () => {
    sideBar.classList.toggle('mobile-menu');
});



const reachSection = document.querySelector('.reach-section');
const callFrame = document.querySelector('.call-frame');
const btnClose = document.querySelector('.close-btn');

function openContact() {
    callFrame.style.top = '50%';
    reachSection.style.height = '100vh'
}

function closeContact() {
    callFrame.style.top = '-550px';
    reachSection.style.height = '0'
}





 