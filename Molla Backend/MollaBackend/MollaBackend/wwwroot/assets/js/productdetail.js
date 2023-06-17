$(function () {
    //Sidebar
    let sidebar = document.querySelector(".sidebar");
    let closeButton = document.querySelector(".sidebar .close-part .close");
    let openButton = document.querySelector("#down-nav-phone .container .logo i")

    openButton.addEventListener("click", function () {
        sidebar.classList.add("active-bar");
        sidebar.classList.remove("hide");
    })

    closeButton.addEventListener("click", function () {
        sidebar.classList.add("hide");
        sidebar.classList.remove("active-bar");
    })

    //Sidebar TabMenu
    let namesInSidebar = document.querySelectorAll(".for-names .names h6")
    let namesElems = document.querySelectorAll(".infos .elems")

    namesInSidebar.forEach(eachName => {
        eachName.addEventListener("click", function (e) {
            document.querySelector(".active-menu").classList.remove("active-menu");
            this.classList.add("active-menu");

            namesElems.forEach(eachElem => {
                if (this.getAttribute("data-id") == eachElem.getAttribute("data-id")) {
                    eachElem.classList.remove("d-none");
                } else {
                    eachElem.classList.add("d-none");
                }
            });
        })
    });

    //Input Background
    let inputs = document.querySelectorAll(".toggle");

    inputs.forEach(eachInput => {
        // eachInput.classList.remove("clicked-input")
        eachInput.addEventListener("click", function (e) {
            if (!this.classList.contains("clicked-input")) {
                this.classList.add("clicked-input");
            }
            // else {
            //     eachInput.classList.add("nonclicked-input");
            // }
        })
    });

    // you may like
    $('.cardss').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false
            },
            576: {
                items: 1,
                nav: false,
                loop: false
            },
            768: {
                items: 2,
                nav: true,
                loop: false
            },
            992: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    })

    let allCards = document.querySelectorAll(".each-card")

    allCards.forEach(eachCard => {
        eachCard.addEventListener("mousemove", function (e) {
            // icons
            this.firstElementChild.children[3].firstElementChild.style.opacity = 1;
            this.firstElementChild.children[3].firstElementChild.classList.remove("animate__fadeOutLeft");
            this.firstElementChild.children[3].firstElementChild.classList.add("animate__fadeInLeft");

            //img
            this.firstElementChild.children[2].classList.remove("open-hovered")
            this.firstElementChild.children[1].classList.add("open-hovered")

            //addcart
            this.firstElementChild.children[3].children[1].style.opacity = 1;
            this.firstElementChild.children[3].children[1].classList.remove("animate__fadeOutDown");
            this.firstElementChild.children[3].children[1].classList.add("animate__fadeInUp");
        })

        eachCard.addEventListener("mouseout", function (e) {
            // icons
            this.firstElementChild.children[3].firstElementChild.style.opacity = 0;
            this.firstElementChild.children[3].firstElementChild.classList.remove("animate__fadeInLeft");
            this.firstElementChild.children[3].firstElementChild.classList.add("animate__fadeOutLeft");

            //img
            this.firstElementChild.children[2].classList.add("open-hovered")
            this.firstElementChild.children[1].classList.remove("open-hovered")

            //addcart
            this.firstElementChild.children[3].children[1].style.opacity = 0;
            this.firstElementChild.children[3].children[1].classList.add("animate__fadeOutDown");
            this.firstElementChild.children[3].children[1].classList.remove("animate__fadeInUp");
        })
    });


    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener("scroll", function (e) {
        if (this.window.scrollY >= 376.5) {
            scrollBtn.style.opacity = 1;
        } else {
            scrollBtn.style.opacity = 0;
        }
    })


    //Currency
    let chooseOneOf = document.querySelector("#up-nav .language-part .money-part span")
    let chooseEuro = document.querySelector("#up-nav .language-part .money-part .drop-money .euro")
    let chooseUsd = document.querySelector("#up-nav .language-part .money-part .drop-money .usd")

    if (localStorage.getItem('currencyChoice')) {
        chooseOneOf.innerText = localStorage.getItem('currencyChoice');
    }

    chooseEuro.addEventListener("click", function (e) {
        chooseOneOf.innerText = chooseEuro.innerText;
        localStorage.setItem('currencyChoice', chooseEuro.innerText);
    });

    chooseUsd.addEventListener("click", function (e) {
        chooseOneOf.innerText = chooseUsd.innerText;
        localStorage.setItem('currencyChoice', chooseUsd.innerText);
    });

    //Language
    let chooseLanguage = document.querySelector("#up-nav .language-part .lang-part span")
    let chooseEnglish = document.querySelector("#up-nav .language-part .lang-part .drop-lang .english")
    let chooseFrench = document.querySelector("#up-nav .language-part .lang-part .drop-lang .french")
    let chooseSpanish = document.querySelector("#up-nav .language-part .lang-part .drop-lang .spanish")

    if (localStorage.getItem('languageChoice')) {
        chooseLanguage.innerText = localStorage.getItem('languageChoice');
    }

    chooseEnglish.addEventListener("click", function (e) {
        chooseLanguage.innerText = chooseEnglish.innerText;
        localStorage.setItem('languageChoice', chooseEnglish.innerText);
    });

    chooseFrench.addEventListener("click", function (e) {
        chooseLanguage.innerText = chooseFrench.innerText;
        localStorage.setItem('languageChoice', chooseFrench.innerText);
    });

    chooseSpanish.addEventListener("click", function (e) {
        chooseLanguage.innerText = chooseSpanish.innerText;
        localStorage.setItem('languageChoice', chooseSpanish.innerText);
    });

    //Sticky navbar
    window.onscroll = function () { myFunction() };
    var navbar = document.getElementById("main-nav");
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    let imageArr = JSON.parse(localStorage.getItem('imageArr'));

    let imgL1 = document.querySelector("#product-info .all .left .left-p .first");
    let imgL2 = document.querySelector("#product-info .all .left .left-p .second");
    let imgR = document.querySelector("#product-info .all .left .right-p img");
    let imgName = document.querySelector("#product-info .all .right .text h4");
    let imgPrice = document.querySelector("#product-info .all .right .text h3");

    imageArr.forEach(eachArr => {
        imgL1.setAttribute("src", eachArr.image1)
        imgL2.setAttribute("src", eachArr.image2)
        imgR.setAttribute("src", eachArr.image1);
        imgName.innerHTML = eachArr.name;
        imgPrice.innerHTML = eachArr.price;
    });
   
    //change between photos
    let attr2 = imgL2.getAttribute("src");
    imgL2.addEventListener("click", function(e){
        imgR.setAttribute("src", attr2);
        imgL1.classList.remove("active");
        imgL1.classList.add("not-active");
        imgL2.classList.add("active");
        imgL2.classList.remove("not-active");
    })

    let attr1 = imgL1.getAttribute("src");
    imgL1.addEventListener("click", function(e){
        imgR.setAttribute("src", attr1);
        imgL1.classList.add("active");
        imgL1.classList.remove("not-active");
        imgL2.classList.remove("active");
        imgL2.classList.add("not-active");
    })

    //cart and wishlists icon numbers
    let wishlisted = JSON.parse(localStorage.getItem("wishlisted"));
    function getWishlistCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".wishlist-sup").innerText = cnt;
        }
    }
    getWishlistCount(wishlisted);

    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    function getProductsCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".cart sup").innerText = cnt;
        }
    }
    getProductsCount(cartProducts);
})