// What will be the output of the following and why ?
console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000);
console.log(3)
setTimeout(() => {
    console.log(4)
}, 0);
console.log(6)

// output of the following program
// 1 this is because of synchronous execution
// 3 this is because of synchronous execution
// 6 this is because of synchronous execution
// 4  this will going to web api because of setTime out function and execute bfore console.log(2) because
// timer in this function is zero seconds
// 2 this will going to web api because of setTime out function and execute after console.log(4) because
// timer in this function is one seconds
