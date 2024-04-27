
localStorage.getItem("endereco");
if(endereco == null){
    pegarEndereco();
}else{
    let atualiza = prompt("O endereço informado, já na base de dados, deseja atualizar? S/N");
    
    if(atualiza == S){
        pegarEndereco();
    } else{
        alert("Execução finalizada!")
    }
}
function pegarEndereco(){
let cep = prompt("Digite seu CEP:")
fetch("https://viacep.com.br/ws/01001000/json/", {method: "GET"})
.then(retornoFetch => retornoFetch.json())
.then(retornoApi => {
    let resposta = prompt("Os dados estão corretos?");
    alert(`${retornoApi.logradouro} - ${retornoApi.complemento} - ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`)

   if(resposta.toLowerCase() == "sim"){
    localStorage.setItem("endereco", JSON.stringify)
   }
})
}