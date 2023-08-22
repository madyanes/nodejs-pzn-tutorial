/**
 * Dalam File System, terdapat 3 jenis library
 *    1. Yang bersifat blocking (synchronous)
 *    2. Yang bersifat non-blocking (asynchronous) dan menggunakan callback
 *    3. Yang bersifat non-blocking (asynchronous), tapi menggunakan promise
 * 
 * 
 * 
 * import fs from 'fs' => synchronous
 * import fs from 'fs/promises' => asynchronous
 * 
 * 
 * 
 * Ref: https://nodejs.org/docs/latest-v12.x/api/fs.html
 */

import fs from 'fs/promises'

const buffer = await fs.readFile('/home/madyan/.bashrc')

console.info(buffer.toString())

await fs.writeFile('temp.txt', 'Hello NodeJS')
