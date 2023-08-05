

let btn = document.getElementById('btn')


btn.addEventListener('click', buscarCachorro)

function buscarCachorro(){

    let url = 'https://dog.ceo/api/breeds/image/random'
    fetch(url)
    .then(response=> response.json())
    .then(json => mostrarDados(json))
    .catch(e => e.message)
    
}

function mostrarDados(dados){

    let msg = document.getElementById('recebermsg')
    msg.value = dados.message
    let imagemCachorro = document.getElementById('img')
    imagemCachorro.src = msg.value
    
}
mostrarDados()