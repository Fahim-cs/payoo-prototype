document.getElementById("add-btn").addEventListener("click", function() {
    // Bank Account
const bankAccount = getValueFrom("add-money-bank");
if(bankAccount === "Select Bank"){
  alert("Please select a bank.");
  return;
}

//get bank account number
const accno=getValueFrom("add-money-number");
if(accno.length !== 11){
  alert("Invalid Account Number");
  return;
}

//get amount
const amount = Number(getValueFrom("add-amount"));
if(amount <= 0){
  alert("Invalid Amount");
  return;
}

//get pin
const pin = getValueFrom("add-pin");
if(pin !== "2003"){
  alert("Wrong Pin");
  return;
}

//get current balance
const currentBalance = getBalance();
//calculate new balance
const newBalance = currentBalance + amount;
//update balance
setBalance(newBalance);
alert(`Add Money Successful from ${bankAccount}. New Balance: $${newBalance} at ${new Date()}
at ${new Date().toLocaleTimeString()}`);

});



