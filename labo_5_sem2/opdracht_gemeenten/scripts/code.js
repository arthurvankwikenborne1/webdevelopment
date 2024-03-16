const setup = () => {
    toonGemeenten();
}

const vraagGemeenteOp = () =>{
    return window.prompt("Gemeente:")
}

const toonGemeenten = () =>{
    const keuzelijst = document.getElementById("gemeenten");
    const gemeenten = [];

    let gemeente;
    while ((gemeente = vraagGemeenteOp().toLowerCase()) !== "stop") {
        gemeente = gemeente[0].toUpperCase() + gemeente.slice(1);
        gemeenten.push(gemeente);
        gemeenten.sort();
    }

    for (let i = 0; i < gemeenten.length; i++) {
        keuzelijst.innerHTML += "<option>" + gemeenten[i] + "</option>";
    }
}

window.addEventListener("load", setup);
