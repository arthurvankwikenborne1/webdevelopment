const setup = () => {
    const btnHerberekenen = document.getElementById("btnHerberekenen");
    btnHerberekenen.addEventListener('click', bereken)
}

const bereken = () => {
    const collectionPrijs = document.getElementsByClassName("prijs");
    const collectionAantal = document.getElementsByClassName("aantal");
    const collectionBtw = document.getElementsByClassName("btw");
    const collectionSubtotaal = document.getElementsByClassName("subtotaal");
    const eindTotaal = document.getElementById("eindtotaal");

    let prijs1 = parseFloat(collectionPrijs[0].textContent);
    let prijs2 = parseFloat(collectionPrijs[1].textContent);
    let prijs3 = parseFloat(collectionPrijs[2].textContent);

    let aantal1 = collectionAantal[0].value;
    let aantal2 = collectionAantal[1].value;
    let aantal3 = collectionAantal[2].value;

    let btw1 = parseInt(collectionBtw[0].textContent);
    let btw2 = parseInt(collectionBtw[1].textContent);
    let btw3 = parseInt(collectionBtw[2].textContent);

    let subtotaal1 = parseFloat((prijs1 * aantal1 * (1+(100-btw1)/100)).toFixed(2));
    let subtotaal2 = parseFloat((prijs2 * aantal2 * (1+(100-btw1)/100)).toFixed(2));
    let subtotaal3 = parseFloat((prijs3 * aantal3 * (1+(100-btw1)/100)).toFixed(2));

    let eindtotaal = subtotaal1 + subtotaal2 + subtotaal3;

    collectionSubtotaal[0].innerHTML = subtotaal1;
    collectionSubtotaal[1].innerHTML = subtotaal2;
    collectionSubtotaal[2].innerHTML = subtotaal3;

    eindTotaal.innerHTML = eindtotaal;



}


window.addEventListener("load", setup);