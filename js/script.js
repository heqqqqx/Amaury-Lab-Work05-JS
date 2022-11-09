function userForm(){
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city= document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.getElementsByName("membership");
    var membershipChoice;
    for(var i = 0; i < membership.length; i++){
        if(membership[i].checked){
            membershipChoice = membership[i].value;
        }
    }
    document.getElementById("output").innerHTML = "<h2>First Name: </h2> <h3>" + firstname  + "</h3><h2>Last Name: </h2><h3>" + lastname + "</h3><h2>Email: </h2><h3>" + email  + "</h3><h2>Address: </h2><h3>" + address +  "</h3><h2>City: </h2><h3>" + city + "</h3><h2>Province: </h2><h3>" + province + "</h3><h2>Membership: </h2><h3>" +  membershipChoice + "</h3>";
}
// function to reset the form and output (personnal adding)

function reset(){
    document.getElementById("output").innerHTML = "";
}

if (document.URL.includes("index.html")) {

const submit_form = document.getElementById("user-submit");
submit_form.addEventListener("click", userForm);
const cancel = document.getElementById("user-cancel");
cancel.addEventListener("click", reset);
} else {
    


const submit_calculation = document.getElementById('submit-calculation');

submit_calculation.addEventListener('click', (e) => {  
var numbers = document.getElementById('numbers').value;
document.getElementById('result').innerHTML = numbers;
//check if the input is a number
if (numbers.length == 0) {
    alert('Please enter numbers');
    e.preventDefault();
    
} else {
    var numbersArray = numbers.split(' ');
    console.log(numbersArray);
    // Check if there is an empty string in the array, if so, remove it
    numbersArray = numbersArray.filter(function (el) {
        return el != "";
    });
    // check if values in array are numbers, if not alert user and stop function
    for (var i = 0; i < numbersArray.length; i++) {
        if (isNaN(numbersArray[i])) {
            alert('Please enter numbers only');
            e.stopPropagation();
            return;
        }
    }
    
    console.log(numbersArray);
    var choice_type = document.getElementsByName('operation');
    console.log(choice_type);
    var choice;
    for(var i = 0; i < choice_type.length; i++){
        if(choice_type[i].checked){
            choice = choice_type[i].value;
        }
    }

    if(choice == 'sum'){
        var sum = 0;
        for(var i = 0; i < numbersArray.length; i++){
            sum += parseInt(numbersArray[i]);
        }
        document.getElementById('result').innerHTML = sum;
    }
    else if(choice == 'average'){
        var sum = 0;
        for(var i = 0; i < numbersArray.length; i++){
            sum += parseInt(numbersArray[i]);
        }
        var average = sum / numbersArray.length;
        document.getElementById('result').innerHTML = average;
    }
    else if(choice == 'max'){
        document.getElementById('result').innerHTML = Math.max(...numbersArray);
    }
    else if(choice == 'min'){
        document.getElementById('result').innerHTML = Math.min(...numbersArray);
    }
}
e.preventDefault();
});}
