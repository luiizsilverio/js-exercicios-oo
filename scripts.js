/*
    1) Crie uma classe que simula uma conta no banco, com a propriedade saldo 
    e os métodos depósito e saque.
*/

class Conta {
    #saldo = 0

    constructor(saldo) {
        this.#saldo = saldo
    }

    deposito(valor) {
        this.#saldo += valor
    }

    saque(valor) {
        this.#saldo -= valor
    }

    get saldo() {
        return this.#saldo
    }
}

const conta = new Conta(1000)

console.log("[Exercício 01]", "=".repeat(20))
conta.saque(500)
conta.deposito(300)
console.log(conta.saldo)

/*
    2) Crie uma classe que simula um carrinho de compras de um e-commerce, com as propriedades
    itens, quantidade total, valor total.
    Crie os métodos para adicionar e remover itens.
*/

class Carrinho {
    #itens 
    #qtotal 
    #vltotal 

    constructor() {
        this.#itens = []
        this.#qtotal = 0
        this.#vltotal = 0
    }

    get itens() {
        return this.#itens
    }

    get qtotal() {
        return this.#qtotal
    }

    get vltotal() {
        return this.#vltotal
    }

    adicionaItem(item) {
        this.#itens = [...this.#itens, item]
        this.#qtotal += item.qtd
        this.#vltotal += (item.valor * item.qtd)
    }

    removeItem(produto) {
        const indice = this.#itens.findIndex(it => it.produto === produto)
        if (indice >= 0) {
            this.#qtotal -= this.#itens[indice].qtd
            this.#vltotal -= (this.#itens[indice].valor * this.#itens[indice].qtd)
            this.#itens.splice(indice, 1)
        }
    }
}

const carrinho = new Carrinho()

carrinho.adicionaItem({ produto: 'camiseta', qtd: 2, valor: 80 })
carrinho.adicionaItem({ produto: 'bermuda', qtd: 1, valor: 50 })
carrinho.adicionaItem({ produto: 'carteira', qtd: 1, valor: 35 })

console.log("[Exercício 02]", "=".repeat(20))
console.log('quantidade:', carrinho.qtotal)
console.log('valor total:', carrinho.vltotal)
console.log(JSON.stringify(carrinho.itens))

carrinho.removeItem('camiseta')

console.log('quantidade:', carrinho.qtotal)
console.log('valor total:', carrinho.vltotal)
console.log(JSON.stringify(carrinho.itens))

/*
    Crie um objeto que simula o endereço de um cliente, com as propriedades
    rua, bairro, cidade e UF. No construtor, o endereço já deve ser definido.
    Crie métodos para atualizar as propriedades.
*/

class Endereco {
    #rua
    #bairro
    #cidade
    #uf

    constructor(rua, bairro, cidade, uf) {
        this.#rua = rua
        this.#bairro = bairro
        this.#cidade = cidade
        this.#uf = uf        
    }

    set rua(value) {
        this.#rua = value
    }

    set bairro(value) {
        this.#bairro = value
    }

    set cidade(value) {
        this.#cidade = value
    }

    set uf(value) {
        this.#uf = value
    }

    get rua() {
        return this.#rua
    }    

    get bairro() {
        return this.#bairro
    }

    get cidade() {
        return this.#cidade
    }


}

const ender = new Endereco('Av. Francisco Glicério, 1000', 'Centro', 'Campinas', 'SP')

console.log("[Exercício 03]", "=".repeat(20))
console.log(ender)
ender.bairro = 'Guanabara'
console.log(ender)

/*
    Crie uma classe que simule um carro, com propriedades marca, cor, gasolina restante.
    Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente.
    Crie um método de abastecer.
*/

class Carro {
    #marca
    #cor
    #gasolina

    constructor (marca, cor, gasolina) {
        this.#cor = cor
        this.#gasolina = gasolina
        this.#marca = marca
    }

    dirigir(kms) {
        console.log(`Dirigindo... ${kms} km`)
        this.#gasolina -= kms
        if (this.#gasolina <= 0) {
            this.#gasolina = 0
            console.log('Carro sem gasolina!')
        } else {
            console.log('Gasolina restante:', this.#gasolina)
        }
    }

    abastecer(litros) {
        console.log(`Abastecendo... ${litros} litros`)
        this.#gasolina += litros
        console.log('Gasolina restante:', this.#gasolina)
    }
}

console.log("[Exercício 03]", "=".repeat(20))

const carro = new Carro('Renault', 'Vermelho', 5)

carro.dirigir(1)
carro.dirigir(2)
carro.dirigir(10)
carro.abastecer(10)

/* 
    Crie uma classe conta bancária, com as propriedades: saldo na C/C,
    saldo na poupança e juros da poupança.
    Crie os métodos de depósito e saque, e um método para transferir 
    dinheiro da poupança para a c.corrente.
    Crie uma conta especial que herda da conta normal, com os juros X2
*/

class ContaCorrente {
    #saldoCC = 0
    #saldoCP = 0
    _jurosPoupanca = 3.14

    constructor(numero) {
        this.numero = numero
    }

    deposito(value) {
        this.#saldoCC += value
        console.log(`Depositando R$ ${value}...`)
        console.log(`Saldo atual: R$ ${this.#saldoCC}`)
    }

    saque(value) {
        this.#saldoCC -= value
        console.log(`Efetuando Saque de R$ ${value}...`)
        console.log(`Saldo atual: R$ ${this.#saldoCC}`)
    }

    set jurosPoupanca(value) {
        this._jurosPoupanca = value
    }

    transferenciaCP(value) {
        console.log(`Transferindo R$ ${value} para poupança...`)
        if (this.#saldoCC < value) {
            console.log('Saldo insuficiente!')
        } else {
            this.#saldoCC -= value
            this.#saldoCP += value
            console.log('Saldo na CC:', this.#saldoCC)
            console.log('Saldo na Poupança:', this.#saldoCP)
        }
    }   

    transferenciaCC(value) {
        console.log(`Transferindo R$ ${value} para conta corrente...`)
        if (this.#saldoCP < value) {
            console.log('Saldo insuficiente na poupança!')
        } else {
            this.#saldoCC += value
            this.#saldoCP -= value
            console.log('Saldo na CC:', this.#saldoCC)
            console.log('Saldo na Poupança:', this.#saldoCP)
        }
    }   

    jurosDeAniversario() {
        const juros = this.#saldoCP * this._jurosPoupanca / 100
        this.#saldoCP += juros;
        console.log('Juros de Aniversário:', juros)
        console.log(`Saldo na Poupança: R$ ${this.#saldoCP}`)
    }
}

class ContaEspecial extends ContaCorrente {
    constructor(numero) {
        super(numero)
        this._jurosPoupanca *= 2
    }
}

console.log("[Exercício 04]", "=".repeat(20))

const minhaConta = new ContaCorrente("13041-1")

console.log(minhaConta)
minhaConta.deposito(1000)
minhaConta.saque(50)
minhaConta.transferenciaCP(300)
minhaConta.transferenciaCC(100)
minhaConta.jurosDeAniversario()
console.log(minhaConta)

const contaEsp = new ContaEspecial("11223-4")

console.log(contaEsp)
contaEsp.deposito(1000)
contaEsp.transferenciaCP(1000)
contaEsp.jurosDeAniversario()
