const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Olá Cypress Discovery! by QAcademy'})
})

app.get('/avengers', function(req,res){
    var avengers = ['Tony Stark', 'Clint Barthon', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scoth Lang']
    return res.json({data: avengers})
})

app.get('/cnh', function(req,res){
    const idade = req.query.idade

    if(!idade){
        res.json({message:"Ops! Idade é um campo obrigatório"})
        return
   }

   var idadeNum = parseInt(idade)

    
    if(idadeNum>=18){
        return res.json({message:"Ok. Você pode tirar sua CNH"})
    }else if(idadeNum>4){
        return res.json({message:"Você é menor de idade!. Sugiro andar de bike"})
    } else{
        return res.json({message:"Melhor andar de velotro"})
    }

})

app.listen(3000)