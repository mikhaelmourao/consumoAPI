function consultaEndereco(){

let cep = document.querySelector('#cep').value


try {
    if(cep.length !==8){
        alert('CEP inválido')
    }
    
} catch (error) {
    alert(error.message)
    
}

let url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url)
.then(response => response.json())//verificar a resposta e converter em json
.then(data => mostrarDados(data))//imprimir os dados
.catch(err => console.error('Erro na solicitação',err))

}

cep.addEventListener("change", consultaEndereco)


function mostrarDados(dados){
    console.log(dados)
    
    let rua = document.querySelector('#rua')
    let complemento = document.querySelector('#complemento')
    let bairro = document.querySelector('#bairro')
    let cidade = document.querySelector('#cidade')
    let estado = document.querySelector('#estado')
    
    rua.value = dados.logradouro
    complemento.value = dados.complemento
    bairro.value = dados.bairro
    cidade.value = dados.localidade
    estado.value = dados.uf
}

