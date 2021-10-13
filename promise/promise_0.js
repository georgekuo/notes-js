const logWord = (word) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('word::', word)
      resolve()
    }, Math.floor(Math.random() * 1000))
  })
}

// Process A
logWord('a')
  .then(() => logWord('b'))
  .then(() => logWord('c'))
  .then(() => logWord('d'))

// Process B
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

// Why both process difference？
