function verificarIdade(){

    var nome = document.querySelector('input[name=nome]')
    var recebeIdade = document.querySelector('input[name=idade]')
    if(recebeIdade.value.length == 0){
         alert("Ops! Idade é um campo obrigatório")
         // return
    }

    var idade = parseInt(recebeIdade.value)

     
     if(idade>=18){
         alert("Ok. Você pode tirar sua CNH")
     }else if(idade>4){
         alert("Você é menor de idade!. Sugiro andar de bike")
     } else{
         alert("Melhor andar de velotro")
     }


 }
 // var nome = prompt("Qual o seu nome");
 // var recebeIdade = prompt("Informe a sua idade");
 // var idade = parseInt(recebeIdade);


 // console.log(nome);
 // console.log(typeof nome);
 // console.log(idade);
 // console.log(typeof idade);

 
 // document.getElementById("nome").innerText = nome;