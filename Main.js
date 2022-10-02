//LOADER

let loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})

//SCROLL DA ABA DE SERVICOS/DOCUMENTOS

const productContainers = [...document.querySelectorAll('.servicos-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += (containerWidth/3);
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= (containerWidth/3);
    })
})


//API DO GOOGLE MAPS
window.onload = function(){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-18.9247651, -48.2555117),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById('api-google'), mapProp)
    }
    initialize();
}

//MENU TOGGLE
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);   
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
        }
    }

    const mobileNavbar =  new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );
    mobileNavbar.init();

    (function () {
        var menu = document.getElementById('menu'); // colocar em cache
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) menu.classList.add('green'); // > 0 ou outro valor desejado
            else menu.classList.remove('green');
        });
    })();

    