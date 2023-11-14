const { Socket } = require('socket.io')

// esta linha carrega o modulo express e cria uma instancia do aplicativo e guarda no app
const app = require('express')()

// esta linha cria uma instancia do http e configura o server para usar o aplicativo definido acima app
const server = require('http').createServer(app)

// criamos uma instancia do socket io para permitir a troca de dados entre o cliente e o  
// servidor e Quando definimos o cors e passamos a url estamos a dizer que o server vai pegar dados de somente esta url
// que e a aplicacao react

const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}})

// Criamos uma porta pode ser qualquer numero a sua escolha

const PORT = 3001

// Para que o server reconheca a conexao que se encontra no frontend

io.on('connection', Socket => {
    console.log("User connected", Socket.id);

// desconectando o server

    Socket.on('disconnect', reason => {
        console.log("Usuario desconectado", Socket.id);
    })

    Socket.on('set_username', username => {
        Socket.data.username = username
      
})

    Socket.on('message', text =>{
        io.emit('receive_message', {
            text,
            authorId: Socket.id,
            author: Socket.data.username
        })
    })


})

// serve para iniciar o servidor na porta acima e comecar a receber requisicoes HTTP.
server.listen(PORT, () => console.log("Server running"))