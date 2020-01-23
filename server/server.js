const path = require('path')
const express = require('express')

const server = express()
const messageRoutes = require('./routes/messages')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/messages', messageRoutes)



module.exports = server
