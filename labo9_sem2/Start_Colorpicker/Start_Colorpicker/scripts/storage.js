let global = {
    swatches : [],
    sliderValues : []
}

const storeSliderValues = () => {
    let kleur = {};
    let kleurenJSON;

    kleur.red = document.getElementById("lblRed").textContent;
    kleur.groen = document.getElementById("lblGreen").textContent;
    kleur.blauw = document.getElementById("lblBlue").textContent;

    global.sliderValues[global.sliderValues.length] = kleur;
    kleurenJSON = JSON.stringify(global.sliderValues);
    localStorage.setItem("sliderValues", kleurenJSON);
};

const restoreSliderValues = () => {
    let sldValRood = document.getElementById("sldRed").value;
    let sldValBlauw = document.getElementById("sldBlue").value;
    let sldValGroen = document.getElementById("sldGreen").value;

    let jsonSlider = JSON.parse(localStorage.getItem("sliderValues"))[0];
    sldValRood = jsonSlider.red;
    sldValGroen = jsonSlider.groen;
    sldValBlauw = jsonSlider.blauw;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let kleur = {};
    let kleurenJSON;

    kleur.red = document.getElementById("sldRed").value;
    kleur.groen = document.getElementById("sldGreen").value;
    kleur.blauw = document.getElementById("sldBlue").value;

    global.swatches[global.swatches.length] = kleur;
    kleurenJSON = JSON.stringify(global.swatches);
    localStorage.setItem("swatches", kleurenJSON);
}

const restoreSwatches = () => {
    let valsSwatches = JSON.parse(localStorage.getItem("swatches"));
    for (let i = 0; i < valsSwatches.length; i++) {
        let rood = valsSwatches[i].red;
        let groen = valsSwatches[i].groen;
        let blauw = valsSwatches[i].blauw;
        addSwatchComponent(rood, groen, blauw);
    }
};
