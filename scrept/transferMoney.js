document.getElementById("transfer-btn").addEventListener("click", function() {

    const transferNumber = getValueFrom("transfer-number");

    if (transferNumber.length !== 11){
        alert("Invalid User Account Number");
        return;
    }

    const transferAmount = Number(getValueFrom("transfer-amount"));
    const currentBalance = getBalance();

    const newBalance = currentBalance - transferAmount;

    if (newBalance < 0){
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFrom("transfer-pin");

    if (pin !== "2003"){
        alert("Wrong Pin");
        return;
    }

  
   setBalance(newBalance);

    alert(`Transfer Successful to ${transferNumber}. New Balance: $${newBalance} at ${new Date()}
at ${new Date().toLocaleTimeString()}`);

});