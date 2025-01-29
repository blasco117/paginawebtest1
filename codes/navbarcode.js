//desktop & tablet search button

let secondarySearchActive = false;

const searchButton = document.getElementById("search-alternativo");
const nav1 = document.querySelector(".pagina-header-nav1");
const nav2 = document.querySelector(".pagina-header-nav2");

function toggleNav() {
    if (!secondarySearchActive) {
        nav1.style.display = "none";
        nav2.style.display = "inline";
    } else {
        nav1.style.display = "inline";
        nav2.style.display = "none";
    }
    secondarySearchActive = !secondarySearchActive;
}

searchButton.addEventListener("click", toggleNav);

//mobile search button

let secondaryMobileSearchActive = false;

const mobileSearchButton = document.getElementById("mobilesearchbutton1");
const mobileSearchBar = document.getElementsByClassName("pagina-mobile-header-nav2-search");

const mobileMenuElements1 = [
    "pagina-mobile-header-nav1",
    "pagina-mobile-header-nav3",
    "pagina-mobile-header-nav4",
    "pagina-mobile-header-nav5"
];

function openMobileSearch(){
    if(!secondaryMobileSearchActive){
        for(var i of mobileMenuElements1){
            mobileSearchButton.firstChild.src = "imgs/buttons/close_logo1.png";
            document.getElementsByClassName(i)[0].style.display = "none";
            document.getElementsByClassName("pagina-header")[0].style.justifyContent = "start";
        }
        mobileSearchBar[0].style.display = "inline";
    }else{
        for(var i of mobileMenuElements1){
            mobileSearchButton.firstChild.src = "imgs/buttons/search_logo1.png";
            document.getElementsByClassName(i)[0].style.display = "inline";
            document.getElementsByClassName("pagina-header")[0].style.justifyContent = "space-between";
        }
        mobileSearchBar[0].style.display = "none";
    }
    secondaryMobileSearchActive = !secondaryMobileSearchActive;
}

mobileSearchButton.addEventListener("click",openMobileSearch);

//mobile dropdown

let dropMenuActive = false;

const dropButton = document.getElementById("dropbutton");
const dropMenu = document.getElementsByClassName("pagina-header-dropdown-menu");

const mobileMenuElements2 = [
    "pagina-mobile-header-nav2",
    "pagina-mobile-header-nav3",
    "pagina-mobile-header-nav4",
    "pagina-mobile-header-nav5",
];

function openDropMenu(){
    if(!dropMenuActive){
        document.getElementById("dropbuttonimage").src = "imgs/buttons/close_logo1.png";
        document.getElementsByClassName("pagina-header")[0].style.borderBottom = "0";
        document.getElementsByClassName("pagina-header-dropdown-menu")[0].style.borderBottom = "3px solid gray";
        for(var i of mobileMenuElements2){
            document.getElementsByClassName(i)[0].style.display = "none";
        }
        dropMenu[0].style.display = "block";
    }else{
        document.getElementById("dropbuttonimage").src = "imgs/buttons/submenu_logo.png";
        document.getElementsByClassName("pagina-header")[0].style.borderBottom = "3px solid gray";
        document.getElementsByClassName("pagina-header-dropdown-menu")[0].style.borderBottom = "0";
        for(var i of mobileMenuElements2){
            document.getElementsByClassName(i)[0].style.display = "inline";
        }
        dropMenu[0].style.display = "none";
    }
    dropMenuActive = !dropMenuActive;
}

dropButton.addEventListener("click", openDropMenu);

//resize window

var oldWidth = window.innerWidth;

window.addEventListener("resize", function() {
    var width = window.innerWidth;

    if(width != oldWidth){
        if (width > 950) {
            nav1.style.display = "inline";
            nav2.style.display = "inline";
            for(var i of mobileMenuElements2){
                document.getElementsByClassName(i)[0].style.display = "none";
            }
            document.getElementsByClassName("pagina-mobile-header-nav1")[0].style.display = "none";
        } else if (width <= 950 && width > 730) {
            nav1.style.display = "inline";
            nav2.style.display = "none";
            for(var i of mobileMenuElements2){
                document.getElementsByClassName(i)[0].style.display = "none";
            }
            document.getElementsByClassName("pagina-mobile-header-nav1")[0].style.display = "none";
        } else {
            nav1.style.display = "none";
            nav2.style.display = "none";
            for(var i of mobileMenuElements2){
                document.getElementsByClassName(i)[0].style.display = "inline";
            }
            document.getElementsByClassName("pagina-mobile-header-nav1")[0].style.display = "inline";
        }
        document.getElementsByClassName("pagina-header")[0].style.borderBottom = "3px solid gray";
        document.getElementsByClassName("pagina-header-dropdown-menu")[0].style.borderBottom = "0";
        document.getElementById("dropbuttonimage").src = "imgs/buttons/submenu_logo.png";
        document.getElementsByClassName("pagina-header")[0].style.justifyContent = "space-between";
        mobileSearchButton.firstChild.src = "imgs/buttons/search_logo1.png";
        mobileSearchBar[0].style.display = "none";
        dropMenu[0].style.display = "none";
        dropMenuActive = false;
        secondarySearchActive = false;
        secondaryMobileSearchActive = false;
        oldWidth = width;
    }
});