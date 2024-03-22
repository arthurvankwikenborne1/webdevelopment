const setup = () => {
    const firstPElement = document.querySelectorAll("p")[0];
    firstPElement.innerText = "Good job!"
}
window.addEventListener("load", setup);