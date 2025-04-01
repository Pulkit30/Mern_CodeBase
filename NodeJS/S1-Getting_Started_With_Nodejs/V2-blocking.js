// for (let i = 0; i < 10000000000; i++) {
//   //I am doing nothing,just consuming it
// }
// console.log("Task to be performed after loop");
// console.log("I have to wait for this long loop to finish :( ");


/* Single Thread is busy in running the loop,thats why console.log() is coming after long time*/
/*With single threaded application, it becomes slow and hanging*/


//Non-Blocking code

setTimeout(()=>{
  console.log('Task to be performed after 8 seconds')
},8000);
console.log('I do not have to wait for this long loop to finish. Yay :')


/* with setTimeout(), second console.log statement goes to the main thread*/




