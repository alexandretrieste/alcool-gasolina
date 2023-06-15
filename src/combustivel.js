const GASOLINA = "GASOLINA";
const ETANOL = "ETANOL";

class Combustivel {
    constructor(tipo, preco) {
        this.tipo = tipo;
        this.preco = preco;
    }
}

class Posto {
    constructor(nome, gasolina, etanol) {
        this.nome = nome;
        this.gasolina = gasolina;
        this.etanol = etanol;
    }

    sugereCombustivel() {
        const percentual = this.etanol.preco / this.gasolina.preco;
        const recomendacao = percentual < 0.7 ? ETANOL : GASOLINA;
        return `No posto ${this.nome}, considerando o preço atual, é mais vantajoso abastecer com ${recomendacao}. A relação de preços Etanol/Gasolina é de ${percentual.toFixed(2)}.`;
    }
}

function calcularCombustivel(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let precoGasolina = parseFloat(document.getElementById('gasolina').value);
    let precoEtanol = parseFloat(document.getElementById('etanol').value);

    let posto = new Posto(nome, new Combustivel(GASOLINA, precoGasolina), new Combustivel(ETANOL, precoEtanol));

    let mensagemDiv = document.createElement('div');
    mensagemDiv.textContent = posto.sugereCombustivel();

    let output = document.getElementById('output');
    output.appendChild(mensagemDiv);

    document.getElementById('form').reset();
}

document.getElementById('form').addEventListener('submit', calcularCombustivel);
