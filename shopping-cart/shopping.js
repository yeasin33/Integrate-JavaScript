
// // case count increment event handler

function handleProductChange(product, isIncrease){
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1200;
    }
    if(product == 'case'){
        productTotal = productNewCount * 64;
    }
    document.getElementById( product + '-total').innerHTML = "$" + productTotal;
    calculateTotal();
}

/// product count calculate even handler
function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1200 + caseCount * 59;
    document.getElementById('total-price').innerHTML = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerHTML = "$" +  tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerHTML = "$" +  grandTotal;
}
// get input value calculate
function getInputValue(product){
    const productInput =  document.getElementById(product + '-count');
    const  productCount = parseInt(productInput.value);
     return productCount;

};


// function handleProductChange(isIncrease){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerHTML = "$" + caseTotal;
// }

// /// phone count event handler
// function handlePhoneProductChange(inIncrease){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const newPhoneCount = phoneCount - 1;
//     let newPhoneCount = phoneCount;
//     if( inIncrease == true){
//         newPhoneCount = phoneCount + 1
//     }
//     if(inIncrease == false && phoneCount > 0){
//         newPhoneCount = phoneCount - 1
//     }
//     phoneInput.value = newPhoneCount;
//     const phoneTotal = newPhoneCount * 1200;
//     document.getElementById('phone-total').innerHTML = "$" + phoneTotal;
// }


// document.getElementById('case-increment').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerHTML = "$" +  caseTotal;

// })

// // case count decrement even handler
// document.getElementById('case-decrement').addEventListener('click',function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerHTML = "$" + caseTotal;
// })

