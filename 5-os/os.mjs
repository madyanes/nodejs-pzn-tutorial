// Ref: https://nodejs.org/docs/latest-v12.x/api/os.html

import os, { freemem, networkInterfaces } from 'os'

console.info(os.platform())
console.info(os.arch())
console.table(os.cpus())
console.info(os.uptime())
console.info(os.totalmem())
console.info(freemem())
console.table(networkInterfaces())
