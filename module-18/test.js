// // synchronous and asynchronous

// const taskOne = () =>{
//     console.log('task1');
// }

// const taskTwo = () =>{
//     setTimeout(() =>{
//         console.log('task 2 loading',4000)
//     })
// }
// const taskThree = () =>{
//     console.log('task3');
// }
// const taskFour = () =>{
//     console.log('task4');
// }
// const taskFive = () =>{
//     console.log('task5');
// }

// taskOne()
// taskTwo()
// taskThree()
// taskFour()
// taskFive()

// CallBack Function and higher order function 

function square(x){
console.log(`square ${x}: ${x * x}`);
}

square(5);

function higherOrderFunction(num, callback){
callback(num);
}

higherOrderFunction(8, square)
