const setup = () => {
    window.alert("Dit is een mededeling");
    //Toont de mededeling in een popup met een 'ok' button
    let confirmVal = window.confirm("Weet u het zeker?");
    console.log(confirmVal); // dit is een boolean, dus True/False
    //Toont de vraag in een popup met een 'ok' en 'cancel' button
    // De return waarde geeft aan op welke knop de gebruiker duwde
    let inputVal =window.prompt("Wat is uw naam", "onbekend");
    //Toont de vraag in een popup met een tekstveld met een 'ok' en een 'cancel' button.
    // De andere tekst ("onbekend" hierboven) wordt standaard al ingevuld bij het tonen.
    console.log(inputVal);
    //naam in console indien ok, anders null
}
window.addEventListener("load", setup);