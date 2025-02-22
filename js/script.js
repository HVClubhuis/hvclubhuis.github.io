
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

    // bestellen mail
    function bestellen(product, prijs) {
        const email = "hvclubhuis@gmail.com";
        const subject = encodeURIComponent(`Bestelling: ${product}`);

        let body = 
            "Vul het onderstaande formulier in:%0D%0A" +
            "Product: " + product + "%0D%0A";

        // Alleen "Maat" toevoegen als het geen pet is
        if (product !== "Pet") {
            body += "Maat: [Vul je maat in]%0D%0A";
        }

        body += 
            "Aantal: [Vul het aantal exemplaren in]%0D%0A" +
            "Naam: [Vul uw naam in]%0D%0A" +
            "%0D%0A" + // Lege regel voor overzichtelijkheid
            "De prijs per stuk is: " + prijs;

        // `body` niet encoden, zodat %0D%0A werkt
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }

    // reserveer formulier
    function verstuurReservering() {
        const email = "hvclubhuis@gmail.com";
        const naam = document.getElementById("naam").value;
        const userEmail = document.getElementById("email").value;
        const telefoon = document.getElementById("telefoon").value;
        const datum = document.getElementById("datum").value;
        const tijd = document.getElementById("tijd").value;
    
        if (!naam || !userEmail || !telefoon || !datum || !tijd) {
            alert("Vul alle velden in voordat je verzendt.");
            return;
        }
    
        const subject = encodeURIComponent("Nieuwe Reservering");
    
        const body = encodeURIComponent(
            `Check de onderstaande gegevens:\nNaam: ${naam}\nE-mail: ${userEmail}\nTelefoonnummer: ${telefoon}\nDatum: ${datum}\nTijd: ${tijd}`
        );
    
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }

    function bestel(button) {
        const email = "hvclubhuis@gmail.com";
        
        // Zoek het formulier dat bij de knop hoort
        const form = button.closest("form");
        
        // Zoek het dichtstbijzijnde <h2> boven het formulier
        const product = form.closest(".main-row").querySelector("h2").textContent;
        
        // Haal de invoerwaarden op
        const naam = form.querySelector("#naam").value;
        const userEmail = form.querySelector("#email").value;
        const telefoon = form.querySelector("#telefoon").value;
        const maat = form.querySelector("#maat").value;
        const aantal = form.querySelector("#aantal").value;
    
        if (!naam || !userEmail || !telefoon || !maat || !aantal) {
            alert("Vul alle velden in voordat je verzendt.");
            return;
        }
    
        const subject = encodeURIComponent("Nieuwe Bestelling");
    
        const body = encodeURIComponent(
            `Check de onderstaande gegevens:\n\nNaam: ${naam}\nE-mail: ${userEmail}\nTelefoonnummer: ${telefoon}\nProduct: ${product}\nMaat: ${maat}\nAantal: ${aantal}`
        );
    
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
    
 

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