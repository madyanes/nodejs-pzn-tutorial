// Ref: https://nodejs.org/docs/latest-v12.x/api/buffer.html

import { Buffer } from 'buffer'

const buffer = Buffer.from('Madyan Eka Septian')
console.info(buffer.toString()) // utf8 by default

const bufferBase64 = Buffer.from('TWFkeWFuIEVrYSBTZXB0aWFu', 'base64')
console.info(bufferBase64.toString()) // utf8 by default
