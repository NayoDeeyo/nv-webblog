let express = require('express')
const app = express()

app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

let port = 8081
app.listen(port, function () {
    console.log('server running on ' + port)
})

