const p = new Promise((resolve) => {
  const a = 50
  setTimeout(() => {
    console.log('2222222')
  }, 1000)
  setTimeout(() => {
    console.log('3333333')
    resolve(a)
  }, 2000)
  console.log('11111111111')

})

p.then((y) => {
  setTimeout(() => {
    console.log('55555555')
    return y
  }, 2000)
}).then((z) => {
  // console.log('444444444:', z)
  // 為何 這裡沒有等 上面 return 就跑下來？難道程式跑完就下來了？
  setTimeout(()=> {
    console.log('444444444:', z)
  },0)
})