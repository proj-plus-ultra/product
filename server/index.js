const express = require('express')
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');
const cors = require('cors')



const app = express()
const port = 8080

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api', router)

app.get('/name', (req, res) => res.send('Hello Jordan!'))

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))