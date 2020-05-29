const http = require('http')

server = http.createServer((req, res) =>{

    const resp =[]

        resp['/'] = 'HOME'
        resp['/contato'] = 'contato'
        resp['semURL'] = 'URL não encontrada'
     
        res.end(resp[req.url] || resp['semURL'])
    

    
})

server.listen(3001, 'localhost', () =>{
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Para derrubar o servidor, basta aperta crtl+c')
})