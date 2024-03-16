const setup = () => {
    const btnValideer = document.getElementById("btnSubmit");
    btnValideer.addEventListener("click", handleFuncties);
}

const handleFuncties = (event) =>{
    event.preventDefault();
    valideerVoornaam();
    valideerFamilieNaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
    validate();
}

const validate = () =>{
    if (valideerVoornaam() && valideerFamilieNaam() && valideerGeboortedatum() && valideerEmail() && valideerAantalKinderen()){
        window.alert("proficiat");
        return true;
    } else{
        window.alert("Niet alle velden zijn correct ingevuld");
        return false;
    }
}

const layoutFoutmelding = (htmlElement) =>{
    htmlElement.classList.add("foutmelding");
}

const resetError = (htmlElement) =>{
    htmlElement.classList.remove("foutmelding");
    htmlElement.textContent = "";
}

const valideerVoornaam = () =>{
    const voornaam = document.getElementById("voornaam").value;
    const voornaamError = document.getElementById("voornaam_error");
    let gevalideerd = true;
    if(voornaam !== ""){
        console.log("voornaam niet leeg");
        resetError(voornaamError);
        if(voornaam.length <= 30){
            console.log("voornaam bevat genoeg karakters");
            resetError(voornaamError);
        } else{
            gevalideerd = false;
            voornaamError.textContent = "max 30 karakters";
            layoutFoutmelding(voornaamError);
        }
    } else{
        gevalideerd = false;
        voornaamError.textContent = "verplicht veld";
        layoutFoutmelding(voornaamError);
    }
    return gevalideerd
}

const valideerFamilieNaam = () =>{
    const familienaam = document.getElementById("familienaam").value;
    const familienaamError = document.getElementById("familienaam_error");
    let gevalideerd = true;
    if(familienaam !== ""){
        console.log("familienaam niet leeg");
        resetError(familienaamError);
        if(familienaam.length <= 50){
            console.log("binnen bereik");
            resetError(familienaamError);
        } else{
            gevalideerd = false;
            familienaamError.textContent = "max 50 karakters";
            layoutFoutmelding(familienaamError);
        }
    } else{
        gevalideerd = false;
        familienaamError.textContent = "verplicht veld";
        layoutFoutmelding(familienaamError);
    }
    return gevalideerd;
}

const valideerGeboortedatum = () =>{
    const geboortedatum = document.getElementById("geboortedatum").value;
    const geboortedatumError = document.getElementById("geboortedatum_error");
    let gevalideerd = true;
    if(geboortedatum !== ""){
        console.log("geboortedatum niet leeg");
        resetError(geboortedatumError);
        if(/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)){
            console.log("ISO-formaat OK");
            resetError(geboortedatumError);
        } else{
            gevalideerd = false;
            geboortedatumError.textContent = "formaat is niet jjjj-mm-dd";
            layoutFoutmelding(geboortedatumError);
        }
    } else{
        gevalideerd = false;
        geboortedatumError.textContent = "verplicht veld";
        layoutFoutmelding(geboortedatumError);
    }
    return gevalideerd;
}

const valideerEmail = () =>{
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email_error");
    let gevalideerd = true;
    const regExp = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    if(email !== ""){
        console.log("email niet leeg");
        resetError(emailError);
        if(regExp.test(email)){
            console.log("formaat email correct");
            resetError(emailError);
        } else{
            gevalideerd = false;
            emailError.textContent = "geen geldig emailadres";
            layoutFoutmelding(emailError);
        }
    } else{
        gevalideerd = false;
        emailError.textContent = "verplicht veld";
        layoutFoutmelding(emailError);
    }
    return gevalideerd
}

const valideerAantalKinderen = () =>{
    const aantalKinderen = document.getElementById("aantal_kinderen").value;
    const aantalKinderenError = document.getElementById("aantal_kinderen_error");
    let gevalideerd = true;
    if(!isNaN(aantalKinderen) && aantalKinderen > 0){
        console.log("aantal kinderen is een nummer");
        resetError(aantalKinderenError);
        if(aantalKinderen < 99){
            console.log("nog goed vruchtbaar");
            resetError(aantalKinderenError);
        } else{
            gevalideerd = false;
            aantalKinderenError.textContent = "is te vruchtbaar";
            layoutFoutmelding(aantalKinderenError);
        }
    } else{
        gevalideerd = false;
        aantalKinderenError.textContent = "is geen positief getal";
        layoutFoutmelding(aantalKinderenError);
    }
    return gevalideerd;
}

window.addEventListener("load", setup);
