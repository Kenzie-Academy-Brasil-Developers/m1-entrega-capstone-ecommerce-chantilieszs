
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
function criaDivProdutoMain(produto){
    
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

    let adicionarCarrinho = document.createElement('a')
    adicionarCarrinho.innerText = 'Adicionar ao carrinho'
    adicionarCarrinho.href = '#'
    adicionarCarrinho.classList.add('adicionarCarrinho')
    
    div.appendChild(button)
    div.appendChild(h3)
    div.appendChild(paragraph)
    div.appendChild(strong)
    div.appendChild(br)
    div.appendChild(adicionarCarrinho)

    return div
}
function listarCards(listaDeProdutos){

    for(let i = 0; i < listaDeProdutos.length; i++){
        
        const li = criarCard(listaDeProdutos[i])
        
       organizarCards(li)

    }
}listarCards(data)
function organizarCards(li){

   listaDeProdutos.appendChild(li)
    
}