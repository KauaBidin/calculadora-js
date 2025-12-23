// Pega o campo de input (display) da calculadora
const display = document.querySelector('.display') // se usa . para class e # para id


function digitos(valor) { //() armazena
  display.value += valor; // valor final do display
}

// Apagar clicando no C - ("") deleta tudo
function apagar() {
  display.value = ""
}

// calcular o resultado (quando clicar em =)
function resultado() {
  try {
    display.value = eval(display.value); // Usa eval() para calcular a expressão
  } catch {
    display.value = 'Error'; 
  }
}
