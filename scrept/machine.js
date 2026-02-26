//machine id -> input value
function getValueFrom(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(Number(balance));
    return Number(balance);
}

//Machine ->set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//Machine id -> hide all -> show specific machine
function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
   // hide all
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    //show id element
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
//to show
document.getElementById("show-add-money")
.addEventListener("click", function(){
    showOnly("add-money");
});

document.getElementById("show-cashout")
.addEventListener("click", function(){
    showOnly("cashout");
}
);
document.getElementById("show-transfer-money")
.addEventListener("click", function(){
    showOnly("transfer-money");
});