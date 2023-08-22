function samplePromise() {
  return Promise.resolve('Madyan')
}

// SyntaxError: await is only valid in async functions and the top level bodies of modules
// const name = await samplePromise()
// console.info(name)





// Solusi
async function run() {
  const name = await samplePromise()
  console.info(name)
}

run()
