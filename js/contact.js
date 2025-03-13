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
            `Check de onderstaande gegevens:\n\nNaam: ${naam}\nE-mail: ${userEmail}\nTelefoonnummer: ${telefoon}\nDatum: ${datum}\nTijd: ${tijd}`
        );
    
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }