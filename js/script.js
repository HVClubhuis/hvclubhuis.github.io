
    // mobile menu
    document.getElementById('mobile-menu').addEventListener('click', function () {
        const nav = document.querySelector('.header-column-left');
        nav.classList.toggle('show');
    });

    // dropdown menu
    document.getElementById('mobile-menu').addEventListener('click', function () {
        const nav = document.querySelector('.header-column-right');
        nav.classList.toggle('show');
    });

    // copyright year
    document.getElementById("year").textContent = new Date().getFullYear();
       
    // accordeon
    document.querySelectorAll('.display-items').forEach(item => {
        item.addEventListener('click', function () {
            const content = this.parentElement.parentElement.nextElementSibling;
            if (content && content.classList.contains('items')) {
                content.classList.toggle('show');
                this.querySelector('i').classList.toggle('rotate');
            }
        });
    });

    // merch switch
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll("button.switch");
        
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const img = this.previousElementSibling;
                if (img && img.tagName === "IMG") {
                    if (img.src.includes("front")) {
                        img.src = img.src.replace("front", "back");
                        this.textContent = "Voorkant";
                    } else if (img.src.includes("voor")) {
                        img.src = img.src.replace("voor", "achter");
                        this.textContent = "Voorkant";
                    } else {
                        img.src = img.src.replace("back", "front").replace("achter", "voor");
                        this.textContent = "Achterkant";
                    }
                }
            });
        });
    });

    // img pop-up
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', function () {
            const popup = document.getElementById('image-popup');
            const popupImg = document.getElementById('popup-img');
            popupImg.src = this.src;
            popup.style.display = "flex";
        });
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('image-popup').style.display = "none";
    });

    document.getElementById('image-popup').addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = "none";
        }
    });