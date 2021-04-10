// Call Back function and pass different function
function explain_function(name,age , task){
    console.log('your name',name)
    console.log('your age', age);
    task()
}

function washHand(){
    console.log('wash your hand with hand');
}

function takeShower(){
    console.log('please, take your shower');
}
explain_function('Mohammad Yeasin', 23, washHand);
explain_function('Mohammad Faisal', 21 , takeShower);


