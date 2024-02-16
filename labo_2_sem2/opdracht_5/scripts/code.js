

const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig");
    let pElement=document.getElementById("txtOutput");
    btnWijzig.addEventListener("click",event =>{
        pElement.innerHTML="Welkom!";
    })
}
window.addEventListener("load", setup);
