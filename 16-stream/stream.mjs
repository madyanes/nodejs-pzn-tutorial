// Streams can be readable, writable, or both. 
// All streams are instances of EventEmitter.
// Ref: https://nodejs.org/docs/latest-v12.x/api/stream.html

import fs from 'fs'

const writer = fs.createWriteStream('target.log')

writer.write('Madyan\n')
writer.write('Eka\n')
writer.write('Septian\n')
writer.end()

const reader = fs.createReadStream('target.log')
// reader.read() or using listener
reader.addListener('data', (data) => { // data dalam bentuk buffer
  console.info(data.toString())
})
