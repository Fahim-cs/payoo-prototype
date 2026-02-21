document.getElementById("login")
.addEventListener("click", function(event) {

event.preventDefault();

const inputNumber =
document.getElementById("input-number");

const contactNumber =
inputNumber.value;

const inputPin =
document.getElementById("input-pin");

const pin =
inputPin.value;

if(contactNumber==="01746944524"
&& pin==="2003"){

alert("Login successful");

window.location.href="home.html";

}
else{

alert("Wrong number or pin");

}

});