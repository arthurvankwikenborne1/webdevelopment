const setup = () => {

    let btnSubstring = document.getElementById("btnSubstring");


    btnSubstring.addEventListener("click", substring)
}

const substring = () =>{
    let txtInput = document.getElementById("txtInput");
    let startNumber = document.getElementById("startingNumber").value;
    let countNumber = document.getElementById("countNumbers").value;
    let txtOutput = document.getElementById("txtOutput");

    let text = txtInput.value
    let output = text.substring(startNumber, countNumber);

    txtOutput.innerHTML = "<span> " + output + "</span>"

}
window.addEventListener("load", setup);