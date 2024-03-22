const setup = () => {
    const staatVanDeKip = document.getElementById("staatKip");
    const letter = document.getElementById("letter");

    staatVanDeKip.addEventListener("change",toonZinEnKip);
    letter.addEventListener("change", toonMessage)
}

const toonZinEnKip = () =>{
    const foto = document.getElementById("img");
    const staatVanDeKip = document.getElementById("staatKip");
    const note = document.getElementById("note");

    if(staatVanDeKip.value==="metEi"){
        foto.classList.remove("hidden");
        foto.classList.add("with-egg");
        note.textContent = "Hierboven, een kip met een ei";
    } else if(staatVanDeKip.value==="zonderEi"){
        foto.classList.remove("hidden");
        foto.classList.remove("with-egg");
        note.textContent = "Hierboven, een kip zonder een ei";
    }
}
const toonMessage =  () =>{
    const letter = document.getElementById("letter").value;
    const note = document.getElementById("note");
    const zin = "Hierboven, een kip met een ei";
    let counter = 0;
    for (let i = 0; i < zin.length; i++) {
        if (zin[i] === letter){
            counter++;
        }
    }
    note.innerText+= `\nLetter ${letter} komt ${counter} keer voor in bovenstaande zin.`
}

window.addEventListener("load", setup);