import { URL } from 'url'

const madyanes = new URL('https://github.com/madyanes?tab=repositories')

console.info(madyanes.toString())
console.info(madyanes.href)
console.info(madyanes.protocol)
console.info(madyanes.host)
console.info(madyanes.pathname)
console.info(madyanes.searchParams)
