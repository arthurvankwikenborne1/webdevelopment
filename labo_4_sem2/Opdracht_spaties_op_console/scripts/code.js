const setup = () => {
    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", showSpatiesConsole)
}

const showSpatiesConsole = () => {
    const txtInput = document.getElementById("txtInput").value;
    let nieuweTekst = "";
    for (let i=0;i<txtInput.length;i++){
        nieuweTekst += txtInput.charAt(i) + " ";
    }
    console.log(nieuweTekst);
}

window.addEventListener("load", setup);