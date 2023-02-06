const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => res.send('Simple APP with Terraform!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))