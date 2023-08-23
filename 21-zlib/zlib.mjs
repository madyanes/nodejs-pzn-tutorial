import fs from 'fs'
import zlib from 'zlib'

const source = fs.readFileSync('21-zlib/zlib.mjs')
const result = zlib.gzipSync(source) // kompres dengan gzip

fs.writeFileSync('zlib.mjs.txt', result)
