const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, welcome to the sleeping cat!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
