import { Buffer } from 'buffer'

const buffer = Buffer.from('Madyan Eka Septian', 'utf8')

console.info(buffer)
console.info(buffer.toString())

buffer.reverse()
console.info(buffer.toString())
