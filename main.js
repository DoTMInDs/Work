// const closeMenuBar = document.getElementById('close-menu');
// const openMenuBar = document.getElementById('menu-bar');
// const sideBar = document.getElementById('side-bar');

// function openMenu() {
//     openMenuBar.style.left = '-400px'
// }

// function closeMenu() {
//     closeMenuBar.style.left = '0'
// }


const sideBar = document.querySelector('.side-bar-container');
const openMenu = document.querySelector('.menu');
const closeBar = document.querySelector('.close-bar');

openMenu.addEventListener('click',()=> {
    sideBar.classList.toggle('mobile-menu');
})

closeBar.addEventListener('click', () => {
    sideBar.classList.toggle('mobile-menu');
})



const reachSection = document.querySelector('.reach-section');
const callFrame = document.querySelector('.call-frame');
const btnClose = document.querySelector('.close-btn');
// const buttonContact = document.querySelector('.button-contact');

function openContact() {
    callFrame.style.top = '50%';
    reachSection.style.height = '100vh'
}

function closeContact() {
    callFrame.style.top = '-550px';
    reachSection.style.height = '0'
}




// buttonContact.addEventListener('click',()=> {
//     callFrame.classList.toggle('drop-mobile');
// })

// btnClose.addEventListener('click', () => {
//     callFrame.classList.toggle('drop-mobile');
// })


const topNavList = document.querySelector(".container-slider"),
    allTopNav = document.querySelectorAll(".card-slider-centent"),
    arrowIcons = document.querySelectorAll(".arrowLeft i");
    

let isDragging = false;

const handleArrowLeft = () => {
    let scrollVal = Math.round(topNavList.scrollLeft);
    let maxScrollableWidth = topNavList.scrollWidth - topNavList.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";

}

arrowIcons.forEach(arrowLeft => {
    arrowLeft.addEventListener("click", () => {
        topNavList.scrollLeft += arrowLeft.id === "left" ? -350 : 350;
        setTimeout(() => handleArrowLeft(), 50);
    });
})

// allTabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         topNavList.querySelector(".active-blue").classList.remove("active-blue");
//         tab.classList.add(".active-blue");
//     });
// })

const dragging = (e) => {
    if (!isDragging) return;
    topNavList.classList.add("dragging");
    topNavList.scrollLeft -= e.movementX;
    handleArrowLeft();
}

const dragStop = () => {
    isDragging = false;
    topNavList.classList.remove("dragging");
}

topNavList.addEventListener("mousedown", () => isDragging = true)
topNavList.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);




 