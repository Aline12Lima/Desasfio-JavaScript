/*window.alert('Hello world!🌍');

window.alert("Vamos somar dois números? ✍️");

var firstNum= Number (window.prompt("Digite o primeiro número ☝️: "));
var secondNum=Number (window.prompt("Digite o segundo número ✌️: "));

var result= firstNum + secondNum

window.alert( "O resultado é: ✍️ " + result);



if(result ){

    alert( result + " é um número");
}else{
    alert(  ' não é um número🛑');
};



var name = window.prompt("Qual o seu nome?");
const resultName = name;

if(resultName){
    alert( resultName + " seu nome é uma String! 😁")
}else{
    alert("seu nome não é uma String.😿")
}
*/

/*const isBoolean= true;
const noBoolean= false;



var resulBoolean = window.alert(isBoolean &&noBoolean);
if(isBoolean &&noBoolean){
    alert(" Resultado falso,isso é um boolean")
}else{
    alert("Resultado verdadeiro, isso é um boolean")
}
*/

alert("Insira dois números para iniciar o cálculo : ");

let firstNumber = prompt("Digite o primeiro número:");
let secondNumber = prompt(" Digite o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sub = firstNumber - secondNumber;
const div = firstNumber / secondNumber;
const multi = firstNumber * secondNumber;

alert("Subtração:" + sub + " =  " + evenOrOdd(sub));
alert("Multiplicação:" + multi + "= " + evenOrOdd(multi));
alert("Divisão:" + div + "= " + evenOrOdd(parseInt(div, 10)));

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "é par";
  } else {
    return "é impar";
  }
}
