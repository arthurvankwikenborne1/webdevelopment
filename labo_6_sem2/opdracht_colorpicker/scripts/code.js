const setup = () => {
    let sliders = document.querySelectorAll(".slider");
    const btnSubmit = document.getElementById("btnSubmit");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    btnSubmit.addEventListener("click", toonKleur);
}

const update = () => {
    let valRed = document.getElementById("valRed");
    let valGreen = document.getElementById("valGreen");
    let valBlue = document.getElementById("valBlue");

    let colorSwatch = document.querySelector(".swatch");
    let sliders = document.querySelectorAll(".slider");

    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;

    valRed.innerHTML = rood;
    valGreen.innerHTML = groen;
    valBlue.innerHTML = blauw;

    const kleur = `rgb(${rood}, ${groen}, ${blauw})`;
    colorSwatch.style.backgroundColor = kleur;
    colorSwatch.setAttribute("data-rgb", kleur);
}

const toonKleur = () => {
    const kleuren = document.getElementById("savedColors");
    let colorSwatch = document.querySelector(".swatch");
    const huidigeKleur = colorSwatch.getAttribute("data-rgb");

    const kleurtje = document.createElement('div');
    kleurtje.id = 'kleurtje' + huidigeKleur;
    kleurtje.classList.add('savedColor');
    kleurtje.setAttribute('data-rgb', huidigeKleur);

    const closeButton = document.createElement('button');
    closeButton.type = 'submit';
    closeButton.classList.add('btnClose');
    closeButton.innerHTML = '<span>X</span>';
    closeButton.addEventListener('click', function () {
        kleuren.removeChild(kleurtje);
    });

    kleurtje.appendChild(closeButton);
    kleuren.appendChild(kleurtje);

    kleurtje.style.backgroundColor = huidigeKleur;
}

window.addEventListener("load", setup);
