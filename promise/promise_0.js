const logWord = (word) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('word::', word)
      resolve()
    }, Math.floor(Math.random() * 1000))
  })
}

// logWord('a')
//   .then(() => {
//     logWord('b')
//   })
//   .then(() => {
//     logWord('c')
//   })
//   .then(() => {
//     logWord('d')
//   })

logWord('a')
  .then(() => logWord('b'))
  .then(() => logWord('c'))
  .then(() => logWord('d'))

// 為何兩者順序有差？
