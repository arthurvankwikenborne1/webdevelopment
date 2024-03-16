const setup = () => {
    const testString = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    console.log(de_en_het(testString));
}

const de_en_het = (zin) =>{
    let arrayWoorden = [];
    arrayWoorden = zin.split(" ");
    let nieuweZin = "";
    for (let i = 0; i < arrayWoorden.length; i++) {
        if (arrayWoorden[i]==="De"){
            arrayWoorden[i] = "Het";
        } else if(arrayWoorden[i]==="de") {
            arrayWoorden[i] = "het";
        }
    }
    for (let i = 0; i < arrayWoorden.length; i++) {
        nieuweZin += arrayWoorden[i] + " ";
    }
    return nieuweZin.trim();

}

window.addEventListener("load", setup);