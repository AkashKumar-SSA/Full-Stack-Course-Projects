// function delay(){
//     setInterval(()=>{
//         console.log("Waiting for approval")
//     },2000)
// }

// delay()
// console.log("The last")


// setTimeout()
// function setTimeoutfunction(value){
//     console.log("The function call : ",value)
// }

// let timer1 = setTimeout(setTimeoutfunction,3000);
// let timer2 = setTimeout(setTimeoutfunction,1000);
// let timer3 = setTimeout(setTimeoutfunction,5000);

// const interval = setInterval(() => {
//     console.log("Repeating...");
//   }, 1000);
  
//   setTimeout(() => {
//     clearInterval(interval); // Stops it after 5 seconds
//   }, 5000);

// let count = 0;
// const interval = setInterval(()=>{
//     console.log(count++);
// },1000)

// console.log("The ending task")

// setTimeout(()=>{
//     clearInterval(interval);
// },10000)

// const timer = setTimeout(() => {
//     console.log("Won’t run");
//   }, 2000);
  
//   clearTimeout(timer);

// function cheese(){
//     setTimeout(function(){
//         let cheese = "gonda";
//     console.log(`i like ${cheese}`)
//     return cheese;
//     },2000);
// }

// var value = cheese()
// console.log(value)
// setTimeout(()=>{
//     console.log(` checking the value returened by the cheese ${value}`)
// },3000)


// function cheese(newfun){
//     setInterval(function(){
//         let cheese = "gonda";
//     console.log(`i like ${cheese}`)
//     newfun(cheese);
//     },2000);
// }

// cheese((cheese)=>{
//     console.log("checking the value returned by the cheese")
//     console.log(cheese);
// })


let checkEven = new Promise((resolve, reject) => {
    let number = 9;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure