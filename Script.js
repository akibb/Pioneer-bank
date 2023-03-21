

// Login Button Event Handler
const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea =document.getElementById("login-area")
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display ="block";
})

// Deposit Button Event Handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

     const currentDeposit = document.getElementById("currentDeposit").innerText;
     const currentDepositNumber= parseFloat(currentDeposit);
     const totalDeposit = depositNumber + currentDepositNumber;

     document.getElementById("currentDeposit").innerText = totalDeposit;

     const currentBalance = document.getElementById("currentBalance").innerText;
     const currentBalanceNumber = parseFloat(currentBalance);
     const totalBalance = depositNumber + currentBalanceNumber ;

     document.getElementById ("currentBalance").innerText = totalBalance;


     document.getElementById("depositAmount").value = "";
    })