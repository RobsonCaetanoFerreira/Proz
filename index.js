 // Função que realiza a conversão de decimal para binário
 function converterParaBinario() {
  // Pega o valor digitado na caixa de entrada pelo usuário
  var decimal = document.getElementById("decimalInput").value;

  // Verifica se o campo de entrada está vazio
  if (decimal == "") {
      // Exibe uma mensagem de alerta caso o campo esteja vazio
      alert("Por favor, insira um número.");
      return; // Interrompe a execução da função, se não houver número
  }
  
  // Converte o valor inserido (decimal) para binário
  // O parseInt converte a string para um número inteiro e o toString(2) converte o número para binário
  var binario = parseInt(decimal).toString(2);

  // Exibe o resultado na tela no parágrafo com o id 'resultado'
  document.getElementById("resultado").innerText = "O número binário é: " + binario;
}  