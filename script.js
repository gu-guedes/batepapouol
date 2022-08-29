let nome = prompt("Qual o seu nome?")

nome = {
    name: nome
}
console.log(nome)
 const respostaNome = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome)

 
 respostaNome.catch(deuErro)

 function deuErro(){
    
    nome = prompt("Esse nome ja está em uso, poderia digitar outro nome?")

    nome = {
    name: nome
    }

    const respostaNome = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome)
    respostaNome.catch(deuErro)
}





