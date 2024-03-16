const setup = () => {
    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", checkwaarden)
}

const checkwaarden = () =>{
    checkRoker();
    checkMoedertaal();
    checkFavorieteBuurland();
    checkBestelling();
}

const checkRoker = () =>{
    const isRoker = document.getElementById("isRoker");
    if(isRoker.checked === true){
        console.log("is een roker");
    } else{
        console.log("is geen roker");
    }
}

const checkMoedertaal=()=>{
    const toestandNl = document.getElementById("nl_mt");
    const toestandFr = document.getElementById("fr_mt");
    const toestandEn = document.getElementById("en_mt");

    if(toestandNl.checked === true){
        console.log("moedertaal is nl")
    } else if(toestandFr.checked === true){
        console.log("moedertaal is fr")
    } else if(toestandEn.checked === true){
        console.log("moedertaal is en")
    }
}

const checkFavorieteBuurland=()=>{
    const buurland = document.getElementById("fav_buurland").value;
    console.log(`favoriete buurland is ${buurland}`);
}

const checkBestelling = ()=>{
    const select = document.getElementById("bestelling");
    const selectedValues = [];
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].selected) {
            selectedValues.push(select.options[i].value);
        }
    }
    if(selectedValues.length>0){
        let bestellingen = "bestelling bestaat uit "
        for (let i = 0; i < selectedValues.length; i++) {
            bestellingen += selectedValues[i] + " ";
        }
        console.log(bestellingen.trim());
    }
}

window.addEventListener("load", setup);