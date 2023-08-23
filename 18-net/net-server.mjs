import net from 'net'

const server = net.createServer((client) => {
  console.info('Client connected.')

  client.addListener('data', (data) => { // data bertipe Buffer
    console.info(`Receive data ${data.toString()}`)
    client.write(`Hello ${data.toString()}\r\n`)
  })
})

server.listen(3000, 'localhost')
