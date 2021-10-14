/**
 * 在 Promise 中 new 另一個 Promise
 **/

const myPromise = new Promise((resolve, reject) => {
  // 立即執行
  console.log('1.In first Promise, start callback')
  setTimeout(() => {
    let data = 10
    resolve(data) // 2 秒後執行
    console.log('2.In fist Promise, resolve data')
  }, 1500)
})

// 當前面 Promise 的 resolve 得到內容後，才會執行 .then
myPromise
  .then((value) => {
    // 在.then 的 resolvedCallback 中，可以得到在 new Promise 中 resolve 內所得到的值（value）。
    console.log('3.In first then, the value is (10) ' + value)
    // 如果在 .then 的 resolvedCallback 中 return 一個值，則這個值會以 Promise 物件的形式傳到下一個 .then
    return value + 3
  })

  .then((value) => {
    // 因此在這個 .then 的 resolvedCallback 中，可以取得上一個 .then 中 return 的值。
    console.log('4.In second then, the value is (13) ' + value)
    console.log('5.In second Promise, start callback')

    // 如果我們在 .then 中是 return 另一個 new Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 2 秒後再執行
        resolve(value + 3)
        console.log('6.In second Promise, resolve data')
      }, 1500)
    })
  })

  // 則下一個 .then 會等到這個 Promise 中的 resolve 得到值後才執行。
  .then((value) => {
    // 在這個 .then 的 resolvedCallback 中，可以得到上一個 new Promise 中 resolve 的值
    console.log('7.In third then, the value is (16)' + value)
  })
  .catch((reason) => {
    console.log('Request Failed ' + reason)
  })