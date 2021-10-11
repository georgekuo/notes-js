//設定一個 Promise，裡面寫一個非同步程式，然後得到一個 resolve 或 reject 的結果

/*--------------------------------------*/
// 直接宣告一個新的 Promise，不必 return
// 直接宣告的 Promise 之後可直接 .then
// then() 的第一個參數是 resolved 狀態的回調函數，第二個參數（可選）是 rejected 狀態的回調函數

let theRoom = new Promise(function(resolve, reject){
  console.log('000')
  let isClean = false
  if (isClean) {
    resolve('Clean')
  } else {
    reject('not Clean')
  }
})

theRoom
.then((fromResolve) => { console.log('1.Room is ' + fromResolve)})  //then  後面 callback 的參數由第62行 resolve()傳出來
.catch((fromReject) => { console.log('2.Room is ' + fromReject )})  //catch 後面 callback 的參數由第64行 reject() 傳出來

/*--------------------------------------*/
// Promise 順序:
// const promise = new Promise(function (resolve){
//   console.log("inner promise"); // 1. promise 內部先執行
//   resolve(10);
// });
// promise.then((value) => {
//   console.log(value); // 3. 接著執行 then 裡面的程式碼
//   console.log(300)    // 4
// })
// console.log("outer promise"); // 2. 執行 promise 之後的程式碼
// inner promise
// outer promise
// 50
// 100

///////////////////////////////
// var promise = new Promise(function (resolve){
//   console.log("1");  //1
//   resolve(6);
//   console.log("2"); // 2
// });
// promise.then(function(value){
//   console.log(5);    // 5
//   console.log(value) // 6
// });
// console.log("3");  // 3
// console.log("4");  // 4

///////////////////////////////
// console.log(1);  //1
// var promise = new Promise(function (resolve){
//   console.log("promise-1"); // 2
//   resolve('promise');
//   console.log("promise-2"); // 3
// });
// var promise2 = new Promise(function (resolve){
//   console.log("promise2-1"); // 4
//   resolve('promise2');
//   console.log("promise2-2"); // 5
// });
// promise2.then(function(value){
//   console.log(10);   // 7
//   console.log(value) // 8
// });
// promise.then(function(value){
//   console.log(20);   // 9
//   console.log(value) // 10
// });
// console.log("3");  // 6
 
// 1
// promise-1
// promise-2
// promise2-1
// promise2-2
// 3
// 10
// promise2
// 20
// promise

// new Promise 依序處理，然後 then() 是最後處理的

/*--------------------------------------*/
// Promise.resolve(5);
// //可以认为是以下代码的语法糖。

// new Promise(function(resolve){
//   resolve(5);
// });

//example
// let okc = new Promise(function(resolve){
//   console.log(1)
//   resolve(2)
// })
// okc
// .then(a => {
//   console.log(a);
//   return Promise.resolve(3)
// })
// .then(a => {
//   console.log(a);
//   return Promise.resolve(4)
// })
// .then(a => {
//   console.log(a)
// })
// 依序印出 1234


/*--------------------------------------*/
// let myFunc = new Promise(function(resolve){
//   resolve(1)      // resolve 所帶的參數，將會傳給 myFunc 所接的第一個 then
// })
// myFunc
// .then(x => {      // 這裡接收 myFunc resolve 裡面的參數 1
//   console.log(x)  // 印出 1
//   return x + 2    // 返回 1+2
// })
// .then(y => {        // 這裡接收上一個 then 的 retrun value，也就是 3
//   console.log(y)    // 印出 3
//   return y + 1      // 返回 3+1
// })
// .then(z => {       // 這裡接收上一個 then 的 retrun value，也就是 4
//   console.log(z+3) // 印出 4+3
// })
