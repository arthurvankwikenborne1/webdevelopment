const setup = () => {
    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", showSpatiesConsole)
}

const showSpatiesConsole = () => {
    const txtInput = document.getElementById("txtInput").value;
    maakMetSpaties(txtInput);
}

const maakMetSpaties = (inputText) => {
    let result="";
    for (let i=0;i<inputText.length;i++){
        result += inputText.charAt(i) + " ";
    }
    console.log(result);
    return result;
}

window.addEventListener("load", setup);