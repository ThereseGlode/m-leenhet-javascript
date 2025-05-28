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
