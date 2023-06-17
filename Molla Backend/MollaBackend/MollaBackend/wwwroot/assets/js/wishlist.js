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

    //Wishlist
    let wishlisted = JSON.parse(localStorage.getItem("wishlisted"));
    let tableBody = document.querySelector("tbody");
    let cartPart = document.querySelector("#cart-part")
    let productTable = document.querySelector("#product-table")


    if (wishlisted.length != 0) {
        productTable.classList.remove("d-none")
        cartPart.classList.add("d-none")
        getWishlistCount(wishlisted);
        wishlisted.forEach(wish => {
            tableBody.innerHTML += `<tr 
            data-id="${wish.id}">
            <td class="image"><img src="${wish.image}" alt=""></td>
            <td class="name">${wish.name}</td>
            <td class="oneprice">${wish.price}</td>
            <td class="stock">
                <span>In Stock</span>
            </td>
            <td class="select">
                <div class="choose">
                    <a href="" class="addToCart"><i class="fa-solid fa-cart-plus"></i>add to cart</a>
                </div>
            </td>
            <td class="delete"><i class="fa-solid fa-x delete-all"></i></td>
        </tr>`;
            getWishlistCount(wishlisted);
        });

        let deleteBtns = document.querySelectorAll(".delete-all")
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener("click", function (e) {
                e.preventDefault();
                deleteBtns[i].parentElement.parentElement.remove();
                let shouldBeDeleted = wishlisted.find(m => m.id == deleteBtns[i].parentElement.parentElement.getAttribute("data-id"))
                let indexDeleted = wishlisted.indexOf(shouldBeDeleted)
                if (indexDeleted > -1) {
                    wishlisted.splice(indexDeleted, 1)
                }
                localStorage.setItem("wishlisted", JSON.stringify(wishlisted))
                if (wishlisted.length == 0) {
                    productTable.classList.add("d-none")
                    cartPart.classList.remove("d-none")
                }
                let num = parseInt(document.querySelector(".wishlist-sup").innerText) - 1;
                document.querySelector(".wishlist-sup").innerText = num
            })
        }
    } else {
        productTable.classList.add("d-none")
        cartPart.classList.remove("d-none")
    }

    function getWishlistCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".wishlist-sup").innerText = cnt;
        }
    }

    //from wishlist add to cart
    let addCartBtns = document.querySelectorAll(".addToCart");
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (JSON.parse(localStorage.getItem("cartProducts")) != null) {
        cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    }
    addCartBtns.forEach(addCart => {
        getProductsCount(cartProducts);
        addCart.addEventListener("click", function (e) {
            e.preventDefault();
            let itemImg = this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("src");
            let itemName = this.parentElement.parentElement.parentElement.children[1].innerText
            let itemPrice = this.parentElement.parentElement.parentElement.children[2].innerText
            let itemID = parseInt(this.parentNode.parentNode.parentNode.getAttribute("data-id"));
            let existProduct = cartProducts.find(m => m.id == itemID);

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
})