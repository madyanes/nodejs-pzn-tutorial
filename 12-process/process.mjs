// The process object is an instance of EventEmitter.

// The process object is a global that provides information about, and control over, the current Node.js process. 
// As a global, it is always available to Node.js applications without using require(). 
// It can also be explicitly accessed using require():

// Ref: https://nodejs.org/docs/latest-v12.x/api/process.html

process.addListener('exit', (exitCode) => {
  console.log(`About to exit with code: ${exitCode}`)
})

console.info(process.version)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit(100)

console.info('This line after process.exit() will never be executed.')
