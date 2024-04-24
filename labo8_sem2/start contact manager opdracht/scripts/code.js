let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {


    let lstPersonen = document.getElementById("lstPersonen");

    console.log("Klik op de knop bewaar");

    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let aantalKinderen = document.getElementById("txtAantalKinderen").value;

    let datum = new Date(geboortedatum);
    console.log(voornaam,familienaam,geboortedatum,datum,email,aantalKinderen)

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let persoon = {
        voornaam: voornaam,
        familienaam: familienaam,
        geboorteDatum: datum,
        email: email,
        aantalKinderen: aantalKinderen
    }

    let index = lstPersonen.selectedIndex;
    // indien ok, bewaar de ingegeven data.
        if(index<0){
            lstPersonen.innerHTML += `<option>${voornaam} ${familienaam}</option>`;
            console.log(personen);
        } else{
            personen[index].voornaam = voornaam;
            personen[index].familienaam = familienaam;
            personen[index].geboorteDatum = datum;
            personen[index].email = email;
            personen[index].aantalKinderen = aantalKinderen;

        }
        // een nieuw aangemaakte persoon voegen we toe
    personen.push(persoon);
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");

    voornaam.value = '';
    familienaam.value = '';
    geboortedatum.value = '';
    email.value = '';
    aantalKinderen.value = '';
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const toonFormulierVanGebruiker = () =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let index =lstPersonen.selectedIndex;

    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");

    let huidigePersoon = personen[index]

    voornaam.value = huidigePersoon.voornaam;
    familienaam.value = huidigePersoon.familienaam;
    geboortedatum.value = huidigePersoon.geboortedatum;
    email.value = huidigePersoon.email;
    aantalKinderen.value = huidigePersoon.aantalKinderen;
}
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change",toonFormulierVanGebruiker);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);