const global = {
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
};

const setup = () => {
    toonAchterkantKaarten();
};

const toonAchterkantKaarten = () =>{
    let bord = document.getElementById("bord");
    for (let i = 1; i < 13; i++) {
        let image = document.createElement("img");
        let imgPath = `${global.IMAGE_PATH_PREFIX}achterkant_kaart${i}${global.IMAGE_PATH_SUFFIX}`;
        console.log(imgPath);
        // Accessing global properties using global object
        image.setAttribute("src",imgPath);
        image.classList.add("kaartje");
        bord.appendChild(image);
    }
};

window.addEventListener("load", setup);
