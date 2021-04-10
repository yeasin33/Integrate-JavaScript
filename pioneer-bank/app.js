// Login Button Event Handler
document.getElementById('enterBtn').addEventListener('click',function(){
 document.getElementById('login-area').style.display = 'none';  
 document.getElementById('transaction-area').style.display = 'block';  
});

// deposit Button Event Handler

const addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click',function(){
    const depositNumber = getInputNumber('depositAmount');
    document.getElementById('depositAmount').value = ""; // Amti string 

    updateTexNumber('currentBalance', depositNumber); // update current balance 
    updateTexNumber('currentDeposit',depositNumber);  // update total balance
    
});

// update Balance and deposit
function updateTexNumber(id, depositNumber){
    const currentAmount = document.getElementById(id).innerText;
    const totalNumber = parseFloat(currentAmount);
    const totalAmount = depositNumber + totalNumber;
    document.getElementById(id).innerText = totalAmount;
}


// Withdraw button Event5 handler 
// const addWithdraw = document.getElementById('withdrawBtn');
// addWithdraw.addEventListener('click', function(){
//     const withdrawAmount = document.getElementById('withdrawAmount').value;
//     const withdrawAmountNumber = parseFloat(withdrawAmount);
//     document.getElementById('withdrawAmount').value = ""; 


//     const currentWithdraw = document.getElementById('currentWithdraw').innerText;
//     const currentWithdrawNumber = parseFloat(currentWithdraw);
//     const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
//     document.getElementById('currentWithdraw').innerText = totalWithdraw;


//     const currentBalance = document.getElementById('currentBalance').innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalWithdrawBalance = withdrawAmountNumber - currentBalanceNumber;
//     document.getElementById('currentBalance').innerText = totalWithdrawBalance;
    
// })

const addWithdraw = document.getElementById('withdrawBtn');
addWithdraw.addEventListener('click',function(){
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateTexNumber('currentWithdraw',withdrawNumber);
    updateTexNumber('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


