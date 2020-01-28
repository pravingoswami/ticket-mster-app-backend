const express = require('express')
const setupDB = require('./config/databse')
const reouter = require('./config/routes')

const app = express()
const port = 3030
app.use(express.json())

setupDB()

app.use('/', reouter)

app.listen(port, () => {
    console.log('Listening on port', port)
})
