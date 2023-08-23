// readline belum ada versi promise / asynchronous

// kode di bawah bersifat synchronous (blocking)

import readline from 'readline'

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

input.question('Siapa nama Anda? ', (name) => {
  console.info(`Halo ${name}`)
  input.close()
})
