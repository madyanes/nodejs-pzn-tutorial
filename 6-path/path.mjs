// Ref: https://nodejs.org/docs/latest-v12.x/api/path.html

import path from 'path'

const filePath = '~/Lab/somefile.txt'

console.info(path.sep) // Provides the platform-specific path segment separator
console.info(path.dirname(filePath))
console.info(path.basename(filePath))
console.info(path.extname(filePath))
console.info(path.parse(filePath))
