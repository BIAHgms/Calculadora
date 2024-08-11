let entradaAtual = "";  // Armazena o número ou entrada atual que o usuário está digitando
let operador = "";      // Armazena o operador matemático selecionado (+, -, *, /)
let entradaAnterior = ""; // Armazena o número anterior usado na operação


function adicionarNumero(numero) {
    entradaAtual += numero;       // adiciona o NUMERO passado para entradaATUAL
    atualizarDisplay();           // Atualiza a exibição da calculadora com o novo valor
}


function definirOperacao(op) {
    if (entradaAtual === "") return; // Não faz nada se não houver entrada atual

    if (entradaAnterior !== "") {
        calcular(); // Calcula a operação anterior se houver um valor anterior
    }
    
    operador = op;                // Define o novo operador
    entradaAnterior = entradaAtual; // Armazena a entrada atual como valor anterior
    entradaAtual = "";           // Limpa a entrada atual para a próxima operação
}

/**
 * Realiza o cálculo baseado no operador e nas entradas atuais e anteriores.
 * Atualiza a entrada atual com o resultado da operação.
 */
function calcular() {
    if (operador === "" || entradaAtual === "" || entradaAnterior === "") return;
    // Verifica se há um operador e se ambas as entradas estão preenchidas

    let resultado;
    const anterior = parseFloat(entradaAnterior); // Converte a entrada anterior para um número
    const atual = parseFloat(entradaAtual);      // Converte a entrada atual para um número

    // Executa a operação matemática com base no operador
    switch (operador) {
        case '+':
            resultado = anterior + atual; // Adição
            break;
        case '-':
            resultado = anterior - atual; // Subtração
            break;
        case '*':
            resultado = anterior * atual; // Multiplicação
            break;
        case '/':
            if (atual === 0) { // Verifica se a divisão é por zero
                alert("Não é possível dividir por zero"); // Exibe um alerta
                limparDisplay(); // Limpa a calculadora
                return; // Interrompe a função
            }
            resultado = anterior / atual; // Divisão
            break;
        default:
            return; // Retorna se o operador não for reconhecido
    }

    entradaAtual = resultado.toString(); // Armazena o resultado como string
    operador = ""; // Limpa o operador
    entradaAnterior = ""; // Limpa a entrada anterior
    atualizarDisplay(); // Atualiza a exibição com o resultado
}

/**
 * Limpa todos os valores da calculadora e atualiza a exibição.
 */
function limparDisplay() {
    entradaAtual = ""; // Limpa a entrada atual
    operador = "";     // Limpa o operador
    entradaAnterior = ""; // Limpa a entrada anterior
    atualizarDisplay(); // Atualiza a exibição para refletir as mudanças
}

/**
 * Atualiza a exibição da calculadora com o valor atual.
 */
function atualizarDisplay() {
    document.getElementById('display').value = entradaAtual; // Define o valor do campo de entrada com a entrada atual
}