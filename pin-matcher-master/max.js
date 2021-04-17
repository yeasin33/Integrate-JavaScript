// generate pin
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
//display generate pin;
function getDigitPin() {
    const inputPin = document.getElementById('generatePin');
    inputPin.value = getPin();
}

// Match digit container
document.getElementById('number-container').addEventListener('click', function(even){
    const digit = even.target.innerText;
    if(isNaN(digit)){
        // handle back space
        // handle clear
        if(digit === 'c' ){
            const typeInput = document.getElementById('type-digit').value;
            typeInput.value =  '';
        }
    }
    else{
        const typeInput = document.getElementById('type-digit');
        typeInput.value =  typeInput.value + digit;
        
    }
})

// verifyPin Match
function verifyPin(){
    const pin = document.getElementById('generatePin').value;
    const typePin = document.getElementById('type-digit').value;
    if(pin === typePin){
       displayPinMatch('block', 'none');
   
    }
    else{
        displayPinMatch('none', 'block');
    }
}

function displayPinMatch(correctStatus, inCorrectStatus){
    const correct = document.getElementById('correct');
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById('inCorrect');
    inCorrect.style.display = inCorrectStatus;
}