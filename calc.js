var amount_paid;
var rating_given;
var num_people;

function calculateTip() {
    var tip;
    amount_paid = document.getElementById("amount").value;
    rating_given = document.getElementById("ratings").value;
    num_people = document.getElementById("people").value;

    if (amount_paid === '') {
        alert("Please enter the total bill amount!");
    } else if (num_people === '') {
        alert("Please enter the number of people");
    } else {
        tip = (rating_given*amount_paid)/num_people;
        document.getElementById("tipamount").innerHTML = "TIP AMOUNT" + '<br>' + '$ '+ tip + '<br>each';
    }
}