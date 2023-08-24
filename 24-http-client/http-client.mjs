import https from 'https'

// Endpoint di bawah digenerate dari: https://www.toptal.com/developers/postbin/
const endpoint = 'https://www.toptal.com/developers/postbin/1692864343294-6392662245780'

const request = https.request(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}, (response) => {
  response.addListener('data', (data) => {
    console.info(`Received data: ${data.toString()}`)
  })
})

const body = JSON.stringify({ firstName: 'Madyan', lastName: 'Septian' })

request.write(body)
request.end()
