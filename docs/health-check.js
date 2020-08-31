/* eslint-disable */
var http = require('http')

var port = process.env.PORT || 3000

var options = {
  hostname: 'localhost',
  path: '/health-check',
  port: port,
}

var request = http.get(options, (res) => {
  if (res.statusCode == 200) process.exit(0)
  else process.exit(1)
})

request.on('error', function (err) {
  console.error(err)
  process.exit(1)
})

request.end()
