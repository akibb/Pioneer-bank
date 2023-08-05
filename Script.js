

// Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button Event Handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");

    //  const currentDeposit = document.getElementById("currentDeposit").innerText;
    //  const currentDepositNumber= parseFloat(currentDeposit);
    //  const totalDeposit = depositNumber + currentDepositNumber;

    //  document.getElementById("currentDeposit").innerText = totalDeposit;

    //  Balance Button
    //  const currentBalance = document.getElementById("currentBalance").innerText;
    //  const currentBalanceNumber = parseFloat(currentBalance);
    //  const totalBalance = depositNumber + currentBalanceNumber ;

    //  document.getElementById ("currentBalance").innerText = totalBalance;

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
})

// Withdraw Button Handeler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const withdrawAmount= document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;

    document.getElementById(id).innerText = totalAmount;
}