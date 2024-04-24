const setup = () => {
    let verjaardag = new Date("03/13/2004");
    let nu = new Date();
    let millis =  nu.getTime()-verjaardag.getTime();
    let days = Math.round(millis / (1000*24*60*60)) ;
    console.log(days);
}

window.addEventListener("load", setup);