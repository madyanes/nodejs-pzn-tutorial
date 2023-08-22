import dns from 'dns/promises'

const { address, family } = await dns.lookup('madyanes.github.io')

console.info(address)
console.info(family)
