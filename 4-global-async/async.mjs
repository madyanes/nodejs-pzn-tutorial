function samplePromise() {
  return Promise.resolve('Madyan')
}

const name = await samplePromise()
console.info(name)
