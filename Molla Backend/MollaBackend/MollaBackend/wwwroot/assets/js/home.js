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

    //Slider
    let leftIcon = document.querySelector(".chevrons .left");
    let rightIcon = document.querySelector(".chevrons .right");
    let allContents = document.querySelectorAll(".each-content");

    function rightSlider() {
        let activeImage = document.querySelector(".active-img");
        activeImage.classList.remove("active-img");
        if (activeImage.nextElementSibling != null) {
            activeImage.nextElementSibling.classList.add("active-img");
        } else {
            activeImage.parentNode.firstElementChild.classList.add("active-img");
        }

        allContents.forEach(eachContent => {
            if (activeImage.nextElementSibling != null) {
                if (activeImage.nextElementSibling.getAttribute("data-id") == eachContent.getAttribute("data-id")) {
                    eachContent.classList.add("active-words");
                    eachContent.classList.add("slider-animation");
                } else {
                    eachContent.classList.remove("active-words");
                    eachContent.classList.add("slider-animation");
                }
            } else {
                eachContent.parentNode.firstElementChild.classList.add("active-words");
                eachContent.parentNode.children[1].classList.remove("active-words");
            }
        });
    }

    function leftSlider() {
        let activeImage = document.querySelector(".active-img");
        activeImage.classList.remove("active-img");
        if (activeImage.previousElementSibling != null) {
            activeImage.previousElementSibling.classList.add("active-img");
        } else {
            activeImage.parentNode.lastElementChild.classList.add("active-img");
        }

        allContents.forEach(eachContent => {
            if (activeImage.previousElementSibling != null) {
                if (activeImage.previousElementSibling.getAttribute("data-id") == eachContent.getAttribute("data-id")) {
                    eachContent.classList.add("active-words");
                    eachContent.classList.add("slider-animation");
                } else {
                    eachContent.classList.remove("active-words");
                    eachContent.classList.add("slider-animation");
                }
            } else {
                eachContent.parentNode.lastElementChild.classList.add("active-words");
                eachContent.parentNode.children[0].classList.remove("active-words");
            }
        });
    }
    rightIcon.addEventListener("click", rightSlider);
    leftIcon.addEventListener("click", leftSlider);


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

    $('.products').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: false
            },
            900: {
                items: 2,
                nav: false
            },
            1200: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })

    let owlNav = document.querySelector(".owl-nav");
    owlNav.classList.remove("disabled");

    //Products TabMenu
    let captions = document.querySelectorAll("#products-tab-menu .products-menu .for-products-name .product-names h4");
    let allDetails = document.querySelectorAll("#products-tab-menu .products-menu .details .allcontents");

    captions.forEach(eachCaption => {
        eachCaption.addEventListener("click", function (e) {
            document.querySelector(".active-tab").classList.remove("active-tab");
            this.classList.add("active-tab");

            allDetails.forEach(eachDetail => {
                if (this.getAttribute("data-id") == eachDetail.getAttribute("data-id")) {
                    eachDetail.classList.remove("d-none");
                } else {
                    eachDetail.classList.add("d-none");
                }
            });
        })
    });

    //Brand Carousel
    $('.allbrands').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false
            },
            600: {
                items: 4,
                nav: false,
                loop: false
            },
            1000: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    })
    //Trending Products Carousel
    $('.trending-products').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: false
            },
            900: {
                items: 3,
                nav: false
            },
            1200: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })

    //Trending Products TabMenu
    let names = document.querySelectorAll("#trending-products .all .list-type h6");
    let trends = document.querySelectorAll("#trending-products .all .allcards .allcontents");

    names.forEach(eachName => {
        eachName.addEventListener("click", function (e) {
            document.querySelector(".active-trend").classList.remove("active-trend");
            this.classList.add("active-trend");

            trends.forEach(eachTrend => {
                if (this.getAttribute("data-id") == eachTrend.getAttribute("data-id")) {
                    eachTrend.classList.remove("d-none");
                } else {
                    eachTrend.classList.add("d-none");
                }
            });
        })
    });

    //Top-selling Products Carousel
    $('.top-products').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: false
            },
            900: {
                items: 2,
                nav: false
            },
            1200: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })

    //Top Selling Products TabMenu
    let sellnames = document.querySelectorAll("#top-selling-products  .heads .list-type h6");
    let topSellingProducts = document.querySelectorAll("#top-selling-products  .products-list .allcards .allcontents");

    sellnames.forEach(eachSellName => {
        eachSellName.addEventListener("click", function (e) {
            document.querySelector(".active-list").classList.remove("active-list");
            this.classList.add("active-list");

            topSellingProducts.forEach(eachProduct => {
                if (this.getAttribute("data-id") == eachProduct.getAttribute("data-id")) {
                    eachProduct.classList.remove("d-none");
                } else {
                    eachProduct.classList.add("d-none");
                }
            });
        })
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

    AOS.init();
    AOS.init("fade-up");

    //ADD TO CART
    let alertMessage = document.querySelector("#info-message .all")

    let addCartBtns = document.querySelectorAll(".addToCart");
    let cartProducts = [];
    if (JSON.parse(localStorage.getItem("cartProducts")) != undefined) {
        cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    }

    addCartBtns.forEach(addCart => {
        getProductsCount(cartProducts);
        addCart.addEventListener("click", function (e) {
            e.preventDefault();
            let itemImg = this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute("src");
            let itemName = this.parentNode.parentNode.parentNode.children[1].children[1].innerText
            let itemPrice = this.parentNode.parentNode.parentNode.children[1].children[2].innerText
            let itemID = parseInt(this.parentNode.parentNode.parentNode.getAttribute("data-id"));
            let existProduct = cartProducts.find(m => m.id == itemID);
            alertMessage.firstElementChild.innerText = "Product added to Cart";
            alertMessage.style.opacity = 1;
            alertMessage.classList.add("animate__bounceInRight")
            alertMessage.classList.remove("animate__bounceOutRight")
            setTimeout(() => {
                alertMessage.classList.remove("animate__bounceInRight")
                alertMessage.classList.add("animate__bounceOutRight")
                alertMessage.style.opacity = 0;
            }, 3000);

            if (existProduct != undefined) {
                existProduct.count += 1;
            } else {
                cartProducts.push({
                    id: itemID,
                    image: itemImg,
                    name: itemName,
                    price: itemPrice,
                    count: 1
                })
            }
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            getProductsCount(cartProducts);
        })
    });

    function getProductsCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".cart sup").innerText = cnt;
        }
    }

    //add to wishlsit with heart icon
    let addWishlistBtns = document.querySelectorAll(".heart");
    let wishlisted = [];
    // let alertMessage = document.querySelector("#info-message .all")

    if (JSON.parse(localStorage.getItem("wishlisted")) != null) {
        wishlisted = JSON.parse(localStorage.getItem("wishlisted"));
    }

    addWishlistBtns.forEach(addWishlist => {
        getWishlistCount(wishlisted);

        let checkedID = addWishlist.parentNode.parentNode.getAttribute("data-id");
        let productInfo = wishlisted.find(m => m.id == checkedID);
        if (productInfo != undefined) {
            addWishlist.classList.remove("fa-regular");
            addWishlist.classList.remove("open-hovered");
            addWishlist.classList.add("fa-solid");
        }

        addWishlist.addEventListener("click", function (e) {
            e.preventDefault();
            let productImg = this.previousElementSibling.previousElementSibling.getAttribute("src");
            let productName = this.parentNode.nextElementSibling.children[1].innerText;
            let productPrice = this.parentNode.nextElementSibling.children[2].innerText;
            let productID = this.parentNode.parentNode.getAttribute("data-id");
            let checkProduct = wishlisted.find(m => m.id == productID);
            alertMessage.firstElementChild.innerText = "Product added to Wishlist";
            alertMessage.style.opacity = 1;
            alertMessage.classList.add("animate__bounceInRight")
            alertMessage.classList.remove("animate__bounceOutRight")
            setTimeout(() => {
                alertMessage.classList.remove("animate__bounceInRight")
                alertMessage.classList.add("animate__bounceOutRight")
                alertMessage.style.opacity = 0;
            }, 3000);

            if (checkProduct != undefined) {
                this.classList.add("fa-regular");
                this.classList.add("open-hovered");
                this.classList.remove("fa-solid");
                let unlistedIndex = wishlisted.indexOf(checkProduct);
                if (unlistedIndex > -1) {
                    wishlisted.splice(unlistedIndex, 1);
                }

                alertMessage.firstElementChild.innerText = "Product deleted from Wishlist";
                localStorage.setItem("wishlisted", JSON.stringify(wishlisted));
                let decreasedSup = parseInt(document.querySelector(".wishlist-sup").innerText) - 1;
                document.querySelector(".wishlist-sup").innerText = decreasedSup;
            } else {
                this.classList.remove("fa-regular");
                this.classList.remove("open-hovered");
                this.classList.add("fa-solid");
                wishlisted.push({
                    id: productID,
                    image: productImg,
                    name: productName,
                    price: productPrice,
                    count: 1
                });
            }
            localStorage.setItem("wishlisted", JSON.stringify(wishlisted));
            getWishlistCount(wishlisted);
        });
    });

    function getWishlistCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".wishlist-sup").innerText = cnt;
        }
    }

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

    //for product detail
    let links = document.querySelectorAll(".cards")
    let imageArr = [];

    links.forEach(eachLink => {
        eachLink.addEventListener("click", function (e) {
            let mainImg = this.firstElementChild.children[2].getAttribute("src");
            let hovImg = this.firstElementChild.children[3].getAttribute("src");
            let productName = this.children[1].children[1].innerText;
            let productPrice = this.children[1].children[2].innerText;

            imageArr.push({
                image1: mainImg,
                image2: hovImg,
                name: productName,
                price: productPrice
            });

            localStorage.setItem("imageArr", JSON.stringify(imageArr));
        })
    });

    //add to cart dropdown
    let dropBody = document.querySelector("#cart-info .table .all-infos")
    let dropTotal = document.querySelector("#cart-info .table .bottom .total .totalPrice")
    let emptyMessage = document.querySelector("#cart-info .empty-message")
    let productDropdown = document.querySelector("#cart-info .table")

    if (cartProducts.length == 0) {
        productDropdown.classList.add("d-none");
        emptyMessage.classList.remove("d-none");
    } else {
        productDropdown.classList.remove("d-none");
        emptyMessage.classList.add("d-none");
        cartProducts.forEach(eachProduct => {
            dropBody.innerHTML += `<div class="each-info" data-id="${eachProduct.id}">
            <div class="info">
                <span>${eachProduct.name}</span>
                <p>${eachProduct.count} X $${parseFloat(eachProduct.price.substring(1))}</p>
            </div>
            <div class="photo">
                <img src="${eachProduct.image}" alt="">
            </div>
            <div class="option">
                <i class="fa-solid fa-x delete-all"></i>
            </div>
        </div>`
        });

        // localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        let allDeleteBtns = document.querySelectorAll(".delete-all");
        for (let i = 0; i < allDeleteBtns.length; i++) {
            allDeleteBtns[i].addEventListener("click", function (e) {
                allDeleteBtns[i].parentElement.parentElement.remove();
                let itemDeleted = cartProducts.find(m => m.id == allDeleteBtns[i].parentElement.parentElement.getAttribute("data-id"));
                // console.log(allDeleteBtns[i].closest('.each-info').querySelector('.info p').textContent.split(' ')[0]);
                let indexOfProduct = cartProducts.indexOf(itemDeleted)
                if (indexOfProduct > -1) {
                    cartProducts.splice(indexOfProduct, 1)
                }
                if (cartProducts.length == 0) {
                    productDropdown.classList.add("d-none");
                    emptyMessage.classList.remove("d-none");
                }
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
                let num = parseInt(document.querySelector(".cart sup").innerText) - parseInt(allDeleteBtns[i].closest('.each-info').querySelector('.info p').textContent.split(' ')[0]);
                document.querySelector(".cart sup").innerText = num
                dropTotal.innerText = "$" + `${totalSum(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
            })
        }

        function totalSum(str) {
            let sum = 0;
            for (const eachStr of str) {
                sum += (parseFloat(eachStr.price.substring(1)) * parseFloat(eachStr.count))
            }
            return sum;
        }
        dropTotal.innerText = "$" + `${totalSum(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
    }

    let cartB = document.querySelector("#down-nav .cartlist")
    let info = document.querySelector("#cart-info")
    cartB.addEventListener("mouseenter", function (e) {
        e.preventDefault();
        info.classList.remove("d-none");
    })

    info.addEventListener("mouseleave", function (e) {
        e.preventDefault(e)
        info.classList.add("d-none");
    })

})