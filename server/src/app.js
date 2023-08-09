let express = require('express')
const app = express()

app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello eith' + req.params.person)
})
//get user by id
app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน')
})

//get all user
app.get('/user', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งาน')
})

let port = 8081

app.listen(port, function () {
    console.log('server running on ' + port)
})

