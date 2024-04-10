function calculate () { //creating a function
    let num1 = document.getElementById ("costperlitre").value; //creating a variable for cost per litre
    let num2 = document.getElementById ("litresPurchased").value; //creating a second variable for litres purchased
    let total = num1 * num2 // multiplying the two values adn storing it in a third variable

    document.getElementById ("result").textContent = total; //chaning the result element to the total variable
}