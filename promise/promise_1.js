const myPromise = new Promise((resolve, reject) => {
  console.log('In new Promise, start callback'); // 立即執行
  setTimeout(() => {
    let data = 10;
    resolve(data); // 1 秒後執行
  }, 1000);
});

// 在 .then 裡面在 return resolve 的 value
// 這個新的 value 會被傳到下一個 promise 的 resolver 內
myPromise
  .then((value) => {
    console.log('first .then', value); // 被 resolve 後執行
    return value + 3;
  })
  .then((value) => {
    // 得到上一個 .then return 的值後執行
    console.log('second .then');
    console.log('The final value is ' + value);
  });