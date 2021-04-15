// ticket Count increment and decrement
function ticketCountEverySce(section , isIncrement){
    const ticketInput = document.getElementById(section + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrement == true){
        ticketNewCount = ticketCount + 1;
    }
    else if(isIncrement == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculatePrice();
}

function calculatePrice(){
    const firstClass = document.getElementById('firstClass-count').value;
    const economyClass = document.getElementById('economy-count').value;
    let  allPrice = firstClass * 150 + economyClass * 100;
    document.getElementById('total-price').innerHTML = "$" + allPrice;

    let amountCharge =  allPrice / 10;
    document.getElementById('amount-vat').innerHTML = "$" +  amountCharge;

    const totalAmount = allPrice + amountCharge; 
    document.getElementById('grand-total').innerHTML = "$" +   totalAmount;
  
}


