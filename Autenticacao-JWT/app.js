require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const app = express()

//configurando o Json response 

app.use(express.json())

// rota publica
app.get('/', (req, res) => {
    res.status(200).json({msg: "WELCOME GEDIA"})
})

// Registo do user
app.post('/auth/register', async(req, res) => {
    const {name, email, password, confirmpassword} = req.body

//Validations
   if(!name) {
    return res.status(422).json({msg: "O nome e obrigatorio"})
   }

   if(!email) {
    return res.status(422).json({msg: "O email e obrigatorio"})
   }

   if(!password) {
    return res.status(422).json({msg: "Senha obrigatoria"})
   }

   if(password !== confirmpassword) {
    return res.status(422).json({msg: "Os dados nao estao certos"})
   }

   // Verifica se o user existe 
   const userExists = await User.findOne({email : email})

   if(userExists){
    return res.status(422).json({msg: "Utilize um outro email"})
   }

   //Criar password
   const salt = await bcrypt.genSalt(12)
   const passwordHash = await bcrypt.hash(password, salt)

  // private Route

  app.get("/user/:id", async (req, res) => {

   const id = req.params.id

   // check if user exists

   const user = await User.findById(id, '-password')

   if (!user){
     return res.status(404).json({msg: "Usuario nao encontrado  "})
   }

})








   // criar user

   const user = new User({
    name,
    email,
    password: passwordHash,
   })

   try{

    await user.save()

    res.status(201).json({msg: 'Usuario criado com sucesso!'})

   } catch(error){
    console.log(error)
      res.status(500).json({msg: "Erro no servidor, volte a tentar mais tarde"})
   }

})


//Models 

const User = require('./models/User')

// Login user

app.post("/auth/login", async(req, res) => {
       
    const {email, password} = req.body

    // Validations 
      if(!email) {
        return res.status(422).json({msg: "O email e obrigatorio"})
       }
    
       if(!password) {
        return res.status(422).json({msg: "Senha obrigatoria"})
       }

       // Verifica se o user existe 
   const user = await User.findOne({email : email})

   if(!user){
    return res.status(404).json({msg: "User nao encontrado"})
   }

   //check if password match
   const checkPassword = await bcrypt.compare(password, user.password)

   if(!checkPassword){
    return res.status(422).json({msg: "Senha Invalida"})
   }

   try{

    const secret = process.env.SECRET

    const token = jwt.sign({
        id: user._id
    }, secret,) 

    res.status(200).json({msg: "Autenticacao realizada com sucesso", token})

   } catch (err){
    console.log(error)
    res.status(500).json({msg: "Erro no servidor, volte a tentar mais tarde"})
   }
})

//Credenciais 
const dbuUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// conectar a base de dados com a app

mongoose.connect(`mongodb+srv://${dbuUser}:${dbPassword}@cluster0.7jghfzl.mongodb.net/?retryWrites=true&w=majority`).then( () => {
    app.listen(3000)
    console.log('Cheguei Dev Gedia')
} ).catch((err) => console.log(err))

