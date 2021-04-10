// arguments with deal with unknown of arguments
function addNumbers(num1,num2){
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
         sum = num + sum;
    }
    logInfo("good Morning yeasin");
    function logInfo(massage){
        console.log(massage);
    }
    
    var  double =  sum  * 2;
    return double;
}

let result = addNumbers(3, 8 , 34, 23);
console.log("result",result);