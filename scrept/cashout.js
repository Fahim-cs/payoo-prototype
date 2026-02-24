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
    if(cashoutNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    const cashoutAmount = getValueFrom("cashout-amount");
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    const newBalance= Number(balance) - Number(cashoutAmount);
    balanceElement.innerText = newBalance;

    if(newBalance < 0){
        alert("Insufficient Balance");
       
        return;
    }
    const pin = getValueFrom("cashout-pin");

   if(pin === "2003"){
    alert("Cashout Successful");
    balanceElement.innerText = newBalance;
   }else{
    alert("Wrong Pin");
    return;
   }
    

});