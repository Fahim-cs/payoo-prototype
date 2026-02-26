/*const button = document.getElementById("cashout-btn");

button.addEventListener("click", function() {

console.log("Button Clicked");

const balanceElement = document.getElementById("balance");

const balance = parseFloat(balanceElement.innerText);

const amount = parseFloat(document.getElementById("cashout-amount").value);

const pin = document.getElementById("cashout-pin").value;

if(pin !== "2003"){
alert("Wrong Pin");
return;
}

const newBalance = balance - amount;

balanceElement.innerText = newBalance;

});*/
document.getElementById("cashout-btn").addEventListener("click", function() {

    const cashoutNumber = getValueFrom("cashout-number");

    if (cashoutNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }

    const cashoutAmount = Number(getValueFrom("cashout-amount"));
    const currentBalance = getBalance();

    const newBalance = currentBalance - cashoutAmount;

    if (newBalance < 0){
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFrom("cashout-pin");

    if (pin !== "2003"){
        alert("Wrong Pin");
        return;
    }

  
   setBalance(newBalance);

    alert(`Cashout Successful to ${cashoutNumber}. New Balance: $${newBalance} at ${new Date()}
at ${new Date().toLocaleTimeString()}`);

});