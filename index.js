const burgerBtn = document.querySelector(".burger-btn");
const burgerBtnImg = document.querySelector(".burger-btn img");
const navLinksList = document.querySelector("header nav .dropdown-menu");
const dropdownLabels = document.querySelectorAll("header nav .dropdown-menu .main-labels li label");
const arrowImgs = document.querySelectorAll("header nav .dropdown-menu .main-labels li label img");
const navLinksListLabelsItems = document.querySelectorAll("header nav .dropdown-menu .main-labels li .items");
const futureImg = document.querySelector(".future-img");
const benefitsImg = document.querySelector(".benefits-img");
const hero = document.querySelector(".hero");

if(window.innerWidth >= 1199) {
    futureImg.setAttribute("src", "./images/illustration-editor-desktop.svg");
    benefitsImg.setAttribute("src", "./images/illustration-laptop-desktop.svg");
    hero.style.backgroundImage = "url('./images/bg-pattern-intro-desktop.svg')";
    hero.style.backgroundPosition = "20% 50%";
} 
if(window.innerWidth >= 991) {
    for(let i = 0; i < arrowImgs.length; i++) {
        arrowImgs[i].setAttribute("src", "./images/icon-arrow-light.svg");
    }
}

window.onresize = () => {
    if(window.innerWidth >= 1199) {
        futureImg.setAttribute("src", "./images/illustration-editor-desktop.svg");
        benefitsImg.setAttribute("src", "./images/illustration-laptop-desktop.svg");
        hero.style.backgroundImage = "url('./images/bg-pattern-intro-desktop.svg')";
        hero.style.backgroundPosition = "20% 50%";
    } else {
        futureImg.setAttribute("src", "./images/illustration-editor-mobile.svg");
        benefitsImg.setAttribute("src", "./images/illustration-laptop-mobile.svg");
        hero.style.backgroundImage = "url('./images/bg-pattern-intro-mobile.svg')";
        hero.style.backgroundPosition = "40% 45%";
    }

    if(window.innerWidth >= 991) {
        for(let i = 0; i < arrowImgs.length; i++) {
            arrowImgs[i].setAttribute("src", "./images/icon-arrow-light.svg");
        }
    } else {
        for(let i = 0; i < arrowImgs.length; i++) {
            arrowImgs[i].setAttribute("src", "./images/icon-arrow-dark.svg");
        }
    }

}
burgerBtn.addEventListener("click", () => {
    burgerBtnImg.getAttribute("src") === "./images/icon-close.svg" ? 
    burgerBtnImg.setAttribute("src", "./images/icon-hamburger.svg") :
    burgerBtnImg.setAttribute("src", "./images/icon-close.svg")
    navLinksList.classList.toggle("d-flex");

})
for(let i = 0; i < dropdownLabels.length; i++) {
    dropdownLabels[i].addEventListener("click", () => {
        arrowImgs[i].classList.toggle("flip");
        navLinksListLabelsItems[i].classList.toggle("d-flex");
    });
    dropdownLabels[i].addEventListener("keydown", (event) => {
        if(event.key === "Enter") {
            arrowImgs[i].classList.toggle("flip");
            navLinksListLabelsItems[i].classList.toggle("d-flex");
        }
    });
}
