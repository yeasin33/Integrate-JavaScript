//  // When Use to function and function inside array
function evenFy(num){
    if(num % 2 == 0){
        console.log(num , ':This even number');
    }
    else{
        console.log(num * 2, ':This odd number');
    }
}

function evenFy_All(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenFy(num)
    }
   
}

 let number = [5,12,89,8, 12,13];
evenFy_All(number);
  let friendsAge = [13,21,22,34,55,16,20,23];
evenFy_All(friendsAge);

function evenFy_All(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num , ':This even number');
        }
        else{
            console.log(num * 2, ':This odd number');
        }
    }
   
}
let friendsAgeList = [13,21,22,34,55,16,20,23];
evenFy_All(friendsAgeList);

// When to return from a  function and from where
function even_Fy(num){

    var result;
    if(num % 2 == 0){
        result =  num;
    }
    else{
       result =  num * 2 ;
    }
    return result;
}
 let result = even_Fy(33);
 let square = result * result;
console.log('result',square, result);



function evenFy_All(nums){
    let even_array = []; 
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = even_Fy(num)
        even_array.push(result);
    }
    return even_array;
   
}

let friendAge = [13,21,22,34,55,16,20,23];
let num_even = evenFy_All(friendAge);
console.log(num_even);