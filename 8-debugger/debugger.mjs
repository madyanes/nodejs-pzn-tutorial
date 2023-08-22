// Ref: https://nodejs.org/docs/latest-v12.x/api/debugger.html

function sayHello(name) {
  debugger
  return `Hello ${name}`
}

const name = 'Madyan'
console.info(sayHello(name))
