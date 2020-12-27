const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

