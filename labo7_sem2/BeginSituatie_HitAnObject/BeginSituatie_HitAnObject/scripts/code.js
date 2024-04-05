let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    const startButton = document.getElementById("startBtn");
    window.addEventListener("resize", updateSize);
    updateSize();
    let target=document.getElementById("target");
    target.addEventListener("click",geraakt);
    startButton.addEventListener("click", startSpel);

};

const verplaatsImage = ()=> {
    //window.alert("je hebt op de image geklikt, noob");
    let target=document.getElementById('target'); //img opvragen
    let randomNr = Math.round(Math.random() * (global.IMAGE_COUNT-1));
    let imgPath = "./" + global.IMAGE_PATH_PREFIX + randomNr + global.IMAGE_PATH_SUFFIX;
    console.log(imgPath);
    target.setAttribute("src",imgPath);
    let speelveld=document.getElementById("speelveld");
    let maxLeft= speelveld.clientWidth - target.offsetWidth;
    let maxHeight=speelveld.clientHeight - target.offsetHeight;
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";
}

const updateSize = () =>{
    let speelveld=document.getElementById("speelveld");
    speelveld.style.width=(window.innerWidth)*0.9 +"px";
    speelveld.style.height=(window.innerHeight)*0.9+"px";
}

const geraakt = () =>{
    let img = document.getElementById("target");
    let pathFiguur = img.getAttribute("src");
    let geraakt = document.getElementById("aantalHits");
    if(pathFiguur.includes("0")){
        window.alert("GAME OVER");
        clearInterval(global.timeoutId);
    } else{
        global.score++;
        geraakt.innerText = global.score;
    }
}

const startSpel = () =>{
    timeoutId = setInterval(verplaatsImage,1000);
}

window.addEventListener("load", setup);


