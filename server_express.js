const express = require('express')

const server = express()

server.get('/', (req, res)=>{
    res.send('HOME')
})

server.get('/contato', (req, res)=>{
    res.send('CONTATO')
})

server.listen(3001, ()=>{
    console.log('Servidor de pé em http://localhost:3001')
    console.log('Para desligar o servidor, ctrl+c')
})