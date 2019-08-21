// function that calculates the tip
function calculateTip(){
    // these variables hold our values
    var price = document.getElementById("cost").value;
    var rating = document.getElementById("qualityMult").value;
    var partySize = document.getElementById("amountPpl").value;
    // makes sure our form was filled out
    if (price === "" || rating === -1 || partySize === "") {
        alert("Please fill out every box")
        return;
    }
    // the calculation
    var tip = price * rating;
    tip = Math.round(tip * 100) / 100;
    // makes sure its only 2 decimal places
    tip = tip.toFixed(2);
    var total = parseFloat(price) + parseFloat(tip);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    var result = total / parseFloat(partySize);
    result = Math.round(result * 100) / 100;
    
    result = result.toFixed(2);

    document.getElementById("tip").innerHTML = "$" + tip + "<small> Tip</small>";
    document.getElementById("perPerson").innerHTML = "$" + result + "<small> Per Person</small>";
    document.getElementById("total").innerHTML = "$" + total + "<small> Total</small>";

    document.getElementById("totalTip").style.visibility = "visible";
}

document.getElementById("calculate").onclick = function() {
    calculateTip();
};