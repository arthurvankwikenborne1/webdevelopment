const setup = () => {
    const testString = "onoorbaar";
    trigram(testString);
}

const trigram = (woord) =>{
    const trigrams = [];
    const trigrams_3 = [];
    for (let i = 0; i < woord.length; i++) {
        trigrams[i] = woord.substring(i,i+3);
    }
    for (let i = 0; i < trigrams.length; i++) {
        if (trigrams[i].length === 3){
            trigrams_3.push(trigrams[i]);
        }
    }
    for (let i = 0; i < trigrams.length; i++) {
        console.log(trigrams_3[i]);
    }
}
window.addEventListener("load", setup);