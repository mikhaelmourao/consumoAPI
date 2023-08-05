
fetch('pessoas.json')
.then(res => res.json())
.then(json => mostrarNomes(json))
.catch(e => console.error('Deu erro', e))

function mostrarNomes(json){
    let lista = document.createElement('ul')

    let resultado = document.getElementById('resultado')

    resultado.appendChild(lista)

    for(let pessoa of json){
        let itemLista = document.createElement('li')
        itemLista.innerHTML = pessoa.nome

        lista.appendChild(itemLista)
    }
}