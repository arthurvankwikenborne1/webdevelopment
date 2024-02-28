const setup = () => {
    const collection = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.add("opvallend");
    }

}
window.addEventListener("load", setup);