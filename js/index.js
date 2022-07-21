let carrinho = []

let listaCarrinho = document.querySelector('.listaCarrinho')
let listaDeProdutos = document.querySelector('#listaDeProdutos')

function criarCard(produto) {

    let li = document.createElement("li")
    li.classList.add("product")

    let image = document.createElement("img")
    image.src = produto.img
    image.id = 'product-img'

    let div = criaDivProdutoMain(produto)

    listaDeProdutos.appendChild(li)
    li.appendChild(image)
    li.appendChild(div)

    return li

}

function criaDivProdutoMain(produto) {

    let div = document.createElement("div")
    div.classList.add('product-main')

    let button = document.createElement("button")
    button.classList.add('product-tag')
    button.innerText = produto.tag

    let h3 = document.createElement('h3')
    h3.classList.add('product-nameItem')
    h3.innerText = produto.nameItem

    let paragraph = document.createElement('p')
    paragraph.innerText = produto.description

    let strong = document.createElement('strong')
    strong.classList.add('product-price')
    strong.innerText = `R$ ${produto.value}`

    let br = document.createElement('br')

    let adicionarCarrinho = document.createElement('button')
    adicionarCarrinho.innerText = 'Adicionar ao carrinho'
    adicionarCarrinho.id = produto.id
    adicionarCarrinho.classList.add('adicionarCarrinho')

    div.appendChild(button)
    div.appendChild(h3)
    div.appendChild(paragraph)
    div.appendChild(strong)
    div.appendChild(br)
    div.appendChild(adicionarCarrinho)

    return div
}

function listarCards(listaDeProdutos) {

    for (let i = 0; i < listaDeProdutos.length; i++) {

        const li = criarCard(listaDeProdutos[i])

        organizarCards(li)

    }
}
listarCards(data)

function organizarCards(li) {

    listaDeProdutos.appendChild(li)

}

function criaDivCarrinho(produto) {

    let div = document.createElement("div")
    div.classList.add('carrinhoMain')

    let h4 = document.createElement("h4")
    h4.classList.add('titulo-prod-carrinho')
    h4.innerText = produto.nameItem

    let strong = document.createElement('strong')
    strong.classList.add('valorCarrinho')
    strong.innerText = `R$ ${produto.value}`

    let removerCarrinho = document.createElement('button')
    removerCarrinho.innerText = 'Remover do carrinho'
    removerCarrinho.id = produto.id
    removerCarrinho.classList.add('remover')
    removerCarrinho.addEventListener('click', eventoRemoverCarrinho)
    function eventoRemoverCarrinho(){

        let removeu = true

        for(let i = 0; i < carrinho.length; i++){
            if(carrinho[i].id == produto.id && removeu){
                removeu = false
             console.log(carrinho.splice(i, 1));
            }
        }
        listarCarrinho(carrinho)
    }

    div.appendChild(h4)
    div.appendChild(strong)
    div.appendChild(removerCarrinho)

    return div
}

function cardCarrinho(produto) {

    let li = document.createElement("li")
    li.classList.add("product-carrinho")

    let image = document.createElement("img")
    image.src = produto.img
    image.id = 'product-img2'

    let div = criaDivCarrinho(produto)


    li.appendChild(image)
    li.appendChild(div)

    return li
}

function AdicionarAoCarrinho(produto) {

    let buttons = document.querySelectorAll('.adicionarCarrinho')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {

            let eve = event.target.id
            console.log(eve);
            for (let j = 0; j < produto.length; j++) {
                if (eve == produto[j].id) {

                    carrinho.push(produto[i])
                    listarCarrinho(carrinho)
                }

            }
        });
    }
}

AdicionarAoCarrinho(data)

function listarCarrinho(prod) {
    mostrarVazio()
    mostrarQuantidade ()
    listaCarrinho.innerHTML = ''

    for (let i = 0; i < prod.length; i++) {

        const li = cardCarrinho(prod[i])

        pendurar(li)
        
    }

    let btnRemover = document.querySelectorAll(".remover")
}

function pendurar(li) {
    listaCarrinho.appendChild(li)
}


function mostrarVazio(){
    let divVazio = document.querySelector('.div-vazio')
    if(carrinho.length > 0){
        listaCarrinho.style.display = 'flex'
        divVazio.style.display = 'none'
    }else{
        listaCarrinho.style.display = 'none'
        divVazio.style.display = 'flex'
    }

}
function mostrarQuantidade () {
    let divQts = document.querySelector('.div-qtd')

    if(carrinho.length > 0){
        listaCarrinho.style.display = 'flex'
        divQts.style.display = 'flex'
        somar(carrinho)
        mostrarQtd(carrinho)
    }else{
        listaCarrinho.style.display = 'none'
        divQts.style.display = 'none'
    }
}
function mostrarQtd(prod) {
    let valorTotalProd = 0
    for (let i = 0; i < prod.length; i++){
        valorTotalProd = prod.length
    }
    let quantidade = document.querySelector('.quantidade')
    quantidade.innerText = valorTotalProd
}
function somar(arr) {
    let valorTotal = 0
    for (let i = 0; i < arr.length; i++) {
      valorTotal += arr[i].value
    }
    let span = document.querySelector('.valorC')
    span.innerText = `R$ ${valorTotal}`

}
function percorrer(){
    for ( let i = 0; i < data.length; i++){
        let datalist = data[i].nameItem
        console.log(datalist);
    }
        
}percorrer()
 