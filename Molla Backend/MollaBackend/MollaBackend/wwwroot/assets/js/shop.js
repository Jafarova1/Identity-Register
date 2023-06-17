$(function () {
    //Sidebar Home
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

    //Sidebar Shop
    let filterBar = document.querySelector("#filter-for-phone .all");
    let settingsButton = document.querySelector("#settings .all .button")

    settingsButton.addEventListener("click", function () {
        if (filterBar.classList.contains("hide-filter")) {
            filterBar.classList.add("active-filter");
            filterBar.classList.remove("hide-filter");
            settingsButton.classList.add("slide-settings")
        } else {
            filterBar.classList.remove("active-filter");
            filterBar.classList.add("hide-filter");
            settingsButton.classList.remove("slide-settings")
        }
    })

    let rangeMin = 100;
    const range = document.querySelector(".range-selected");
    const rangeInput = document.querySelectorAll(".range-input input");
    const rangePrice = document.querySelectorAll(".range-price input");

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minRange = parseInt(rangeInput[0].value);
            let maxRange = parseInt(rangeInput[1].value);
            if (maxRange - minRange < rangeMin) {
                if (e.target.className === "min") {
                    rangeInput[0].value = maxRange - rangeMin;
                } else {
                    rangeInput[1].value = minRange + rangeMin;
                }
            } else {
                rangePrice[0].value = minRange;
                rangePrice[1].value = maxRange;
                range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
                range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    rangePrice.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = rangePrice[0].value;
            let maxPrice = rangePrice[1].value;
            if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";

                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    let minPart = 100;
    const elemRange = document.querySelector(".selected-range")
    const inputRangePart = document.querySelectorAll(".input-range input")
    const priceRangePart = document.querySelectorAll(".price-range input")

    inputRangePart.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minRanges = parseInt(inputRangePart[0].value);
            let maxRanges = parseInt(inputRangePart[1].value);
            if (maxRanges - minRanges < minPart) {
                if (e.target.className === "min") {
                    inputRangePart[0].value = maxRanges - minPart;
                } else {
                    inputRangePart[1].value = minRanges + minPart;
                }
            } else {
                priceRangePart[0].value = minRanges;
                priceRangePart[1].value = maxRanges;
                elemRange.style.left = (minRanges / inputRangePart[0].max) * 100 + "%";
                elemRange.style.right = 100 - (maxRanges / inputRangePart[1].max) * 100 + "%";
            }
        });
    });

    priceRangePart.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrices = priceRangePart[0].value;
            let maxPrices = priceRangePart[1].value;
            if (maxPrices - minPrices >= minPart && maxPrices <= inputRangePart[1].max) {
                if (e.target.className === "min") {
                    inputRangePart[0].value = minPrices;
                    elemRange.style.left = (minPrices / inputRangePart[0].max) * 100 + "%";

                } else {
                    inputRangePart[1].value = maxPrices;
                    elemRange.style.right = 100 - (maxPrices / inputRangePart[1].max) * 100 + "%";
                }
            }
        });
    });

    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    });

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