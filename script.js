console.log('Hello!');
// script.js
const submitButton = document.getElementById ("submitButton")
console.log (submitButton);

submitButton.addEventListener ("click", function(event){
    console.log ("Button is clicked");
    event.preventDefault();

    const inputNumber = document.getElementById("inputNumber").value;
    console.log (inputNumber);

    const selectOptions = document.getElementById ("selectOptions").value;
    console.log(selectOptions);

    let amount;
    
    let displayResults = document.getElementById ("displayResults");

    if (selectOptions === "pickUp") { 
        //Do this
        amount = inputNumber * 10;
        console.log ("Hent " + amount + " epler");
    } else if (selectOptions === "deliver"){
        //Do that
        amount = inputNumber * 11;
        console.log ("Det leveres " + amount + " epler");
    } else {
        //Do somethink else
        console.error ("Noe er feil");
    
    }
});



// Når brukeren trykker på knappen
document.getElementById("konverterBtn").addEventListener("click", function() {
    // Hent verdien brukeren skrev inn
    const verdi = parseFloat(document.getElementById("inputVerdi").value);
    
    // Hent valgt konverteringstype
    const type = document.getElementById("konverteringstype").value;
  
    // Elementet hvor vi viser resultatet
    const resultatElement = document.getElementById("resultat");
  
    // Sjekk om brukeren har skrevet inn et gyldig tall
    if (isNaN(verdi)) {
      resultatElement.textContent = "Vennligst skriv inn et gyldig tall.";
      return;
    }
  
    let resultat = "";
  
    // Utfør riktig konvertering
    if (type === "cmTilM") {
      resultat = `${verdi} cm = ${verdi / 100} m`;
    } else if (type === "kgTilG") {
      resultat = `${verdi} kg = ${verdi * 1000} g`;
    } else if (type === "mTilKm") {
      resultat = `${verdi} m = ${verdi / 1000} km`;
    } else {
      resultat = "Ugyldig konverteringstype valgt.";
    }
  
    // Vis resultatet
    resultatElement.textContent = resultat;
  });