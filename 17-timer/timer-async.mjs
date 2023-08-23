// Ref: https://nodejs.org/docs/latest-v12.x/api/timers.html

// Versi callback

import timers from 'timers/promises'

// const name = await timers.setTimeout(5000, 'Madyan')

// console.info(new Date())
// console.info(name)





// Versi Promise

for await (const startTime of timers.setInterval(1000)) {
  console.info(`Start time at ${new Date()}`)
}
