const setup = () => {
    const btnSubmit = document.getElementById("submitBtn");
    btnSubmit.addEventListener("click",bereken);
}

const bereken = () =>{
    const veelvoud1 = parseInt(document.getElementById("veelvoud1").value,10);
    const veelvoud2 = parseInt(document.getElementById("veelvoud1").value,10);

    let uitkomst = document.getElementById("uitkomst");

    let oplossing = vindEnBerekenSomVeelvouden(veelvoud1,veelvoud2, 10)
    console.log(oplossing);
    uitkomst.innerHTML = "<span>" + oplossing + "</span>";
}

function vindEnBerekenSomVeelvouden(cijfer1, cijfer2, limit) {
    let veelvouden = [];

    for (let i = 1; i <= limit; i++) {
        // Controleer of het getal een veelvoud is van cijfer1 of cijfer2
        if (i % cijfer1 === 0 || i % cijfer2 === 0) {
            veelvouden.push(i);
        }
    }

    // Voeg de twee gegeven cijfers toe aan de veelvouden en bereken de som
    const som = veelvouden.reduce((acc, num) => acc + num, 0) + cijfer1 + cijfer2;

    return som;
}


window.addEventListener("load", setup);