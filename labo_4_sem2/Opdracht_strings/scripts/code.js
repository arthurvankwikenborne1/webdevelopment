const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    print(typeof leeftijd);
    print(typeof intrest);
    print(typeof isGevaarlijk);
    print(typeof vandaag);
    //2x number, 1 boolean, 1 object
}

const print = (message) => {
    console.log(message);
}

window.addEventListener("load", setup);