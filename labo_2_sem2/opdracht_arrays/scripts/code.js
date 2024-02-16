const setup = () => {
    let familieleden = ['Alicia', 'Feline', 'Elise', 'Zino', 'Arthur'];
    console.log(familieleden.length);
    console.log(familieleden[0], familieleden[2], familieleden[4]);
    familieleden.push(window.prompt('Wat is uw naam', 'onbekend'));
    console.log(familieleden.toString());
}
window.addEventListener("load", setup);