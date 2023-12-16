//Exercicio 1-Cálculo de Produto em Loop While
//Opção correta é
//- C - produto = 945
//Justificativa:
//a cada execução fator será incrementada em 2 a cada passagem pelo loop
//após a primeira execução produto = 3 e fator = 5
//após a segunda produto = 15 e fator = 7
//após a terceira produto =105 e fator = 9
//após a quarta produto =945 e fator = 11
// como 11 é > que 10 , sai do loop e mantem o valor de 945 em produto



//Exercicio 2- Saída do Código
//Opção correta é
//- B - 1121231234
//Justificativa:
//em cada execução do for de i reiniciará o valor de j, e j deverá sempre ser menor ou igual a i sendo assim nossa matriz ficará assim:
//[i],[j]
// - i = 1
//[1][1] - j = 1
// - i = 2
//[2][1] - j = 1,
//[2][2] - j = 2
// - i = 3
//[3][1] - j = 1,
//[3][2] - j = 2,
//[3][3] - j = 3
// - i = 4
//[4][1] - j = 1,
//[4][2] - j = 2,
//[4][3] - j = 3,
//[4][4] - j = 4



//Exercicio 3- Filtrando Strings por Tamanho Mínimo
//Opção correta é
//- C - ["estrela", "planeta", "galáxia"]
//Justificativa:
//Na função filtrarStringsCurtas, é passado um array de string e um tamanho minimo, que retorna um array resultante da filtragem pela condição
// de cada string do array deve ter comprimento maior ou igual (>=) ao tamnho minimo informado
//passando o array palavras const palavras = ["sol", "lua", "estrela", "planeta", "galáxia"]; e o tamnho 5 como parametros da função
// o resultado será um array de lementos que tenham strings com 5 ou mais de comprimento
//sendo assim ["estrela", "planeta", "galáxia"]



//Exercicio 4- Verificador de Palíndromos
//Desenvolva uma função ehPalindromo que verifica se uma string é um palíndromo.
//Um palíndromo é uma palavra ou frase que é a mesma, quer seja lida da esquerda para a direita ou da direita para a esquerda,
//ignorando espaços, pontuações e capitalização. Por exemplo, ehPalindromo("Ana") deve retornar true.

function ehPalindromo(palavra) {
  palavra = palavra.toLowerCase();
  let palavraFormatada = "";

  //criei um mapa de acentos para substituir letras acentuadas pelas mesmas sem acento
  let letrasAcentuadas = {
    a: ["á", "ã", "â", "à"],
    e: ["é", "ê", "è"],
    i: ["í", "î", "ì"],
    o: ["ó", "õ", "ô", "ò"],
    u: ["ú", "û", "ù"],
  };

  for (let caractere of palavra) {
    //Remove espaços no meio da palavra ou frase
    if (caractere === " ") continue;
    else {
        //valida se o caractere é uma vogal acentuada
      for (const key in letrasAcentuadas) {
        //percorre cada propriedade do objeto tentando encontrar a propriedade que tenha em seu valor o caractere acentuado
        //se encontrar ele atribui a propriedade ao valor de caractere, senão ele segue com a execução do programa
        if (letrasAcentuadas[key].findIndex((item) => item === caractere) >= 0) {
          caractere = key;
        } 
      }
      palavraFormatada += caractere;
    }
  }

  let reverse = "";
  for (let index = palavraFormatada.length - 1; index >= 0; index--) {
    reverse += palavraFormatada.charAt(index);
  }
  console.log(palavraFormatada);
  console.log(reverse);
  if (palavraFormatada == reverse) {
    return true;
  } else return false;
}

console.log(ehPalindromo("subi no ônibus"));

//Exercicio 5- Soma dos Ímpares
//Desenvolva uma função somaImpares que recebe um array de números inteiros
//e retorna a soma de todos os números ímpares no array.

function somaImpares(numeros) {
  let soma = 0;

  numeros.forEach((numero) => {
    //Para cada numero no array de numeros é verificado se é impar ou não, pelo resto da divisão por 2
    if (numero % 2 > 0) {
      soma += numero;
    }
  });
  return soma;
}

const numeros = [1, 2, 3, 4, 5, 6, 15, 19];
const soma = somaImpares(numeros);
console.log(soma);
