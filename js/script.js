// Esta é a função que será chamada quando o botão for clicado (definido no HTML com onclick="calcularAcrecimo()").
function calcularAcrecimo() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA
    let valorBaseString = document.getElementById('valor1').value;
    let percentualString = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO
    let valorBase = parseFloat(valorBaseString);
    let percentual = parseFloat(percentualString);

    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS
    if (isNaN(valorBase) || isNaN(percentual)) {
        // Se um dos valores não for um número, exibe um alerta para o usuário.
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return; // A instrução 'return' para a execução da função aqui.
    }

    // 4. REALIZAR O CÁLCULO DE ACRÉSCIMO PERCENTUAL
    // A fórmula para acréscimo é: valorBase + (valorBase * (percentual / 100))
    // Primeiro, calculamos o valor do percentual. Ex: 10% de 200 é (200 * (10 / 100)) = 20.
    let valorDoAcrecimo = valorBase * (percentual / 100);
    // Depois, somamos esse valor ao valor base. Ex: 200 + 20 = 220.
    let resultadoFinal = valorBase + valorDoAcrecimo;

    // 5. EXIBIR O RESULTADO NA PÁGINA
    // document.getElementById('resultado') seleciona o elemento <h2> onde o resultado será exibido.
    // Usamos toFixed(2) para garantir que o resultado tenha sempre 2 casas decimais.
    document.getElementById('resultado').innerHTML = `O valor com acréscimo de ${percentual}% é: ${resultadoFinal.toFixed(2)}`;
}