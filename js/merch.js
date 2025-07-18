function bestel(button) {
    const email = "hvclubhuis@gmail.com";
    
    // Zoek het formulier dat bij de knop hoort
    const form = button.closest("form");
    
    // Zoek het dichtstbijzijnde <h2> boven het formulier
    const product = form.closest(".main-row").querySelector("h2").textContent;

    // Zoek het dichtstbijzijnde .prijs boven het formulier
    const prijs = form.closest(".main-row").querySelector(".prijs").textContent;
    
    // Haal de invoerwaarden op
    // Gebruik form.querySelector() om de elementen binnen het specifieke formulier te vinden
    const naam = form.querySelector('input[id^="naam"]').value; // Zoekt input met id dat begint met 'naam'
    const userEmail = form.querySelector('input[id^="email"]').value; // Zoekt input met id dat begint met 'email'
    const telefoon = form.querySelector('input[id^="telefoon"]').value; // Zoekt input met id dat begint met 'telefoon'
    
    // Controleer of het 'maat' selectie-element bestaat voordat de waarde wordt opgehaald
    const maatSelect = form.querySelector('select[id^="maat"]');
    const maat = maatSelect ? maatSelect.value : ''; // Als het element er is, haal de waarde op, anders lege string

    const aantal = form.querySelector('input[id^="aantal"]').value; // Zoekt input met id dat begint met 'aantal'

    // Haal de geselecteerde geslachtsknop op voor dit specifieke formulier
    const geslachtInput = form.querySelector('input[name^="geslacht-"]:checked');
    const geslacht = geslachtInput ? geslachtInput.value : ''; // Als er niets geselecteerd is, is geslacht leeg

    // Bereken totaal prijs
    const totaal = (prijs * aantal).toFixed(2);

    // Validatie: controleer alle verplichte velden
    // Geslacht is alleen verplicht voor T-shirt en Trui
    if (!naam || !userEmail || !telefoon || !aantal) {
        alert("Vul alle velden in voordat je verzendt.");
        return;
    }

    if ((product.includes("T-shirt") || product.includes("Trui")) && !geslacht) {
        alert("Selecteer alstublieft een geslacht voor dit product.");
        return;
    }

    if ((product.includes("T-shirt") || product.includes("Trui")) && !maat) {
        alert("Selecteer alstublieft een maat voor dit product.");
        return;
    }


    const subject = encodeURIComponent("Nieuwe Bestelling");

    // Voeg geslacht en maat toe aan de e-mailtekst, alleen als het product shirt of trui is
    let bodyText = `Check de onderstaande gegevens:\n\nNaam: ${naam}\nE-mail: ${userEmail}\nTelefoonnummer: ${telefoon}\nProduct: ${product}\n`;
    if (product.includes("T-shirt") || product.includes("Trui")) {
        bodyText += `Geslacht: ${geslacht}\n`;
        bodyText += `Maat: ${maat}\n`;
    }
    bodyText += `Aantal: ${aantal}\nPrijs: € ${totaal}`;

    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}function bestel(button) {
    const email = "hvclubhuis@gmail.com";
    
    // Zoek het formulier dat bij de knop hoort
    const form = button.closest("form");
    
    // Zoek het dichtstbijzijnde <h2> boven het formulier
    const product = form.closest(".main-row").querySelector("h2").textContent;

    // Zoek het dichtstbijzijnde .prijs boven het formulier
    const prijs = form.closest(".main-row").querySelector(".prijs").textContent;
    
    // Haal de invoerwaarden op
    // Gebruik form.querySelector() om de elementen binnen het specifieke formulier te vinden
    const naam = form.querySelector('input[id^="naam"]').value; // Zoekt input met id dat begint met 'naam'
    const userEmail = form.querySelector('input[id^="email"]').value; // Zoekt input met id dat begint met 'email'
    const telefoon = form.querySelector('input[id^="telefoon"]').value; // Zoekt input met id dat begint met 'telefoon'
    
    // Controleer of het 'maat' selectie-element bestaat voordat de waarde wordt opgehaald
    const maatSelect = form.querySelector('select[id^="maat"]');
    const maat = maatSelect ? maatSelect.value : ''; // Als het element er is, haal de waarde op, anders lege string

    const aantal = form.querySelector('input[id^="aantal"]').value; // Zoekt input met id dat begint met 'aantal'

    // Haal de geselecteerde geslachtsknop op voor dit specifieke formulier
    const geslachtInput = form.querySelector('input[name^="geslacht-"]:checked');
    const geslacht = geslachtInput ? geslachtInput.value : ''; // Als er niets geselecteerd is, is geslacht leeg

    // Bereken totaal prijs
    const totaal = (prijs * aantal).toFixed(2);

    // Validatie: controleer alle verplichte velden
    // Geslacht is alleen verplicht voor T-shirt en Trui
    if (!naam || !userEmail || !telefoon || !aantal) {
        alert("Vul alle velden in voordat je verzendt.");
        return;
    }

    if ((product.includes("T-shirt") || product.includes("Trui")) && !geslacht) {
        alert("Selecteer alstublieft een geslacht voor dit product.");
        return;
    }

    if ((product.includes("T-shirt") || product.includes("Trui")) && !maat) {
        alert("Selecteer alstublieft een maat voor dit product.");
        return;
    }


    const subject = encodeURIComponent("Nieuwe Bestelling");

    // Voeg geslacht en maat toe aan de e-mailtekst, alleen als het product shirt of trui is
    let bodyText = `Check de onderstaande gegevens:\n\nNaam: ${naam}\nE-mail: ${userEmail}\nTelefoonnummer: ${telefoon}\nProduct: ${product}\n`;
    if (product.includes("T-shirt") || product.includes("Trui")) {
        bodyText += `Geslacht: ${geslacht}\n`;
        bodyText += `Maat: ${maat}\n`;
    }
    bodyText += `Aantal: ${aantal}\nPrijs: € ${totaal}`;

    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}