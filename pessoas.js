fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregarDados(json))
.catch(error => console.error('nao deu certo', error))

function carregarDados(json){
    
    let table = document.createElement('table');

    let th1 = document.createElement('th')
    th1.innerHTML = 'Nome'
    table.appendChild(th1)

    let th2 = document.createElement('th')
    th2.innerHTML = 'Idade'
    table.appendChild(th2)

    let th3 = document.createElement('th')
    th3.innerHTML = "CPF"
    table.appendChild(th3)

    let resultado = document.querySelector('#resultado')
    
    resultado.appendChild(table)

    for(let pessoa of json){
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome 
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.cpf
        tr.appendChild(td3)

        table.appendChild(tr)
    }
}