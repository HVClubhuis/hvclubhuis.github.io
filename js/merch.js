function bestel(button) {
    const email = "hvclubhuis@gmail.com";
    
    // Zoek het formulier dat bij de knop hoort
    const form = button.closest("form");
    
    // Zoek het dichtstbijzijnde <h2> boven het formulier
    const product = form.closest(".main-row").querySelector("h2").textContent;

    // Zoek het dichtstbijzijnde .prijs boven het formulier
    const prijs = form.closest(".main-row").querySelector(".prijs").textContent;
    
    // Haal de invoerwaarden op
    const naam = form.querySelector("#naam").value;
    const userEmail = form.querySelector("#email").value;
    const telefoon = form.querySelector("#telefoon").value;
    const maat = form.querySelector("#maat").value;
    const aantal = form.querySelector("#aantal").value;

    // Bereken totaal prijs
    const totaal = (prijs * aantal).toFixed(2);

    if (!naam || !userEmail || !telefoon || !maat || !aantal) {
        alert("Vul alle velden in voordat je verzendt.");
        return;
    }

    const subject = encodeURIComponent("Nieuwe Bestelling");

    const body = encodeURIComponent(
        `Check de onderstaande gegevens:\n\nNaam: ${naam}\nE-mail: ${userEmail}\nTelefoonnummer: ${telefoon}\nProduct: ${product}\nMaat: ${maat}\nAantal: ${aantal}\nPrijs: € ${totaal}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}