const setup = () => {
    const zin = "De man van An geeft geen hand aan ambetante verwanten";
    const woord = "an";
    console.log(isValueInText(zin,woord));

}

const isValueInText = (sentence, targetWord) => {
    let count = 0;
    let index = sentence.toLowerCase().indexOf(targetWord.toLowerCase());

    while (index !== -1) {
        count++;
        index = sentence.toLowerCase().indexOf(targetWord.toLowerCase(), index + 1);
    }

    return count;
}

window.addEventListener("load", setup);